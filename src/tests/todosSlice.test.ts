import { createItem, updateItem, setItems } from "appRedux/todos/todosSlice";
import { configureTodosStoreByState } from "./testStore";
import { testItems, activeItems } from "./testUtils";

const newTask = 'task_new';

describe('todos Slice test', () => {
    it('create one task by dispatch', () => {
        const initial = [testItems[0]];
        const store = configureTodosStoreByState({ items: initial });
        const newTaskData = { desc: newTask, isActive: true }

        expect(store.getState()).toEqual({ items: initial });
        store.dispatch(createItem(newTaskData));

        expect(store.getState()).toEqual({ items: [newTaskData,...initial] });
    });
    it('create several tasks by dispatch', () => {
        const store = configureTodosStoreByState({ items: [] });

        expect(store.getState().items.length).toBe(0);
        let times = 5;
        for (let i = 0; i < times; ++i) {
            store.dispatch(createItem({desc: `${newTask}_i`, isActive: true}));
        }
        expect(store.getState().items.length).toBe(times);
    });
    it('update one task by dispatch', () => {
        const store = configureTodosStoreByState({ items: activeItems });

        let firstItem = store.getState().items[0];
        expect(firstItem.isActive).toBeTruthy();
        store.dispatch(updateItem({
            desc: firstItem.desc,
            isActive: false
        }));

        firstItem = store.getState().items[0];
        expect(firstItem.isActive).toBeFalsy();
    });
    it('update several tasks by dispatch', () => {
        const store = configureTodosStoreByState({ items: activeItems });

        activeItems.forEach((item, i) => {
            const stateItem = store.getState().items[i];
            expect(stateItem.isActive).toBeTruthy();
            store.dispatch(updateItem({
                desc: item.desc,
                isActive: false
            }));
        });

        activeItems.forEach((item, i) => {
            const stateItem = store.getState().items[i];
            expect(stateItem.isActive).toBeFalsy();
        });
    });
    it('set tasks by dispatch', () => {
        const store = configureTodosStoreByState({ items: testItems });
        expect(store.getState().items.length).toBe(testItems.length);

        store.dispatch(setItems(activeItems));
        expect(store.getState().items.length).toBe(activeItems.length);

        store.dispatch(setItems([]));
        expect(store.getState().items.length).toBe(0);
    });
});
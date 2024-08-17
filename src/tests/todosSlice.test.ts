import { createItem, updateItem, deleteCompleted } from "appRedux/store";
import { configureStoreByState } from "appRedux/store";
import { testItems, activeItems } from "./testUtils";

const newTask = 'task_new';

describe('todos Slice test', () => {
    it('create one task by dispatch', () => {
        const store = configureStoreByState({ items: [] });
        const newTaskData = { desc: newTask, isActive: true }

        expect(store.getState()).toEqual({ items: [] });
        store.dispatch(createItem(newTask));

        expect(store.getState()).toEqual({ items: [newTaskData] });
    });
    it('create several tasks by dispatch', () => {
        const store = configureStoreByState({ items: [] });

        expect(store.getState().items.length).toBe(0);
        let times = 5;
        for (let i = 0; i < times; ++i) {
            store.dispatch(createItem(`${newTask}_i`));
        }
        expect(store.getState().items.length).toBe(times);
    });
    it('update one task by dispatch', () => {
        const store = configureStoreByState({ items: activeItems });

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
        const store = configureStoreByState({ items: activeItems });

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
    it('clear completed tasks by dispatch', () => {
        const store = configureStoreByState({ items: testItems });
        expect(store.getState().items.length).toBe(testItems.length);

        store.dispatch(deleteCompleted());
        expect(store.getState().items.length).toBe(activeItems.length);
    });
});
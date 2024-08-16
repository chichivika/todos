/* eslint-disable testing-library/prefer-screen-queries */
import Todos from "components/todos/Todos";
import { fireEvent, render, screen, getByRole } from "@testing-library/react";
import { getTodosItemsByStatus } from "utils/appUtils";
import '@testing-library/jest-dom';

let testItems = [];
for (let i = 0; i < 10; ++i) {
    testItems.push({ desc: `task_${i}`, isActive: i % 2 === 0 });
}
const activeItems = getTodosItemsByStatus(testItems, true);
const completedItems = getTodosItemsByStatus(testItems, false);


describe('view my tasks in the list', () => {

    it('view all my tasks by default', () => {
        render(
            <Todos items={testItems} />
        );
        testItems.forEach(item => {
            expect(screen.getByText(item.desc)).toBeInTheDocument();
        });
    });
    it('view all my tasks by click', () => {
        render(
            <Todos items={testItems} />
        );

        let btn = screen.getByText('All');
        fireEvent.click(btn);

        testItems.forEach(item => {
            expect(screen.getByText(item.desc)).toBeInTheDocument();
        });
    });
    it('view my active tasks', () => {
        render(
            <Todos items={testItems} />
        );
        let btn = screen.getByText('Active');
        fireEvent.click(btn);

        activeItems.forEach(item => {
            expect(screen.getByText(item.desc)).toBeInTheDocument();
        });
        completedItems.forEach(item => {
            expect(screen.queryByText(item.desc)).toBeNull();
        });
    });
    it('view my completed tasks', () => {
        render(
            <Todos items={testItems} />
        );
        let btn = screen.getByText('Completed');
        fireEvent.click(btn);

        completedItems.forEach(item => {
            expect(screen.getByText(item.desc)).toBeInTheDocument();
        });
        activeItems.forEach(item => {
            expect(screen.queryByText(item.desc)).toBeNull();
        });
    });
});

describe('update tasks', () => {

    it('create a new task', () => {
        const onCreateItem = jest.fn();
        const newValue = 'task_new';

        render(
            <Todos items={testItems}
                onCreateItem={onCreateItem}
            />
        );

        let input = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

        expect(onCreateItem).toHaveBeenCalledTimes(1);
        expect(input.value).toBe('');
    });

    it('complete an active task', () => {
        const onUpdateItem = jest.fn();

        render(
            <Todos items={[...testItems]}
                onUpdateItem={onUpdateItem}
            />
        );

        let item = screen.getAllByTestId('todos-item')[0] as HTMLElement;
        expect(item).toBeInTheDocument();

        let chBox = getByRole(item, 'checkbox') as HTMLInputElement;
        expect(chBox).toBeEnabled();
        expect(chBox.checked).toBeFalsy();
        fireEvent.click(chBox);

        expect(onUpdateItem).toHaveBeenCalledTimes(1);
    });
    it('trying to uncomplete a completed task', () => {
        const onUpdateItem = jest.fn();

        render(
            <Todos items={[...testItems]}
                onUpdateItem={onUpdateItem}
            />
        );

        let item = screen.getAllByTestId('todos-item')[1] as HTMLElement;
        expect(item).toBeInTheDocument();

        let chBox = getByRole(item, 'checkbox') as HTMLInputElement;
        expect(chBox).toBeDisabled();
        expect(chBox.checked).toBeTruthy();
        fireEvent.click(chBox);

        expect(onUpdateItem).toHaveBeenCalledTimes(0);
    });
});

describe('delete tasks', () => {

    it('no clear btn while only active tasks', () => {
        render(
            <Todos items={[...activeItems]}/>
        );
        expect(screen.queryByText('Clear Completed')).not.toBeInTheDocument();
    });

    it('delete completed tasks', () => {
        const onDeleteCompleted = jest.fn();
        render(
            <Todos items={[...testItems]}
            onDeleteCompleted={onDeleteCompleted}
            />
        );

        let btn = screen.getByText('Clear Completed');
        fireEvent.click(btn);
        expect(onDeleteCompleted).toHaveBeenCalledTimes(1);
    });
});
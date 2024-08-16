export type TodosItemType = {
    desc: string,
    isActive: boolean
};
export type TodosItemsType = TodosItemType[];

export type ViewModeType = 'all' | 'active' | 'completed';

export function getTodosItemsByStatus(items: TodosItemsType, isActive: boolean)
    : TodosItemsType {
    return items.filter(item => item.isActive === isActive);
}
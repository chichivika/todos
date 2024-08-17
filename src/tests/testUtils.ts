import { TodosItemsType } from "utils/appUtils";
import { getTodosItemsByStatus } from "utils/appUtils";

let testItems: TodosItemsType = [];
for (let i = 0; i < 10; ++i) {
    testItems.push({ desc: `task_${i}`, isActive: i % 2 === 0 });
}
const activeItems:TodosItemsType = getTodosItemsByStatus(testItems, true);
const completedItems:TodosItemsType = getTodosItemsByStatus(testItems, false);

export {testItems, activeItems, completedItems};
import axios from "axios";
import { paths } from "./paths";
import { TodosItemsType, TodosItemType } from "utils/appUtils";
import { createMockAdapter } from "./mock/mockAdapter";
import { AxiosResponse } from "axios";

const service = axios.create({ baseURL: 'baseUrl/' });
createMockAdapter(service);

export async function getAllTasks(): Promise<TodosItemsType> {
    try {
        let response = await service.get(paths.getTasks) as AxiosResponse;
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
export async function deleteCompletedTasks(items: TodosItemsType): Promise<TodosItemsType> {
    try {
        let response = await service.delete(paths.deleteTasks, { data: items }) as AxiosResponse;
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
export async function createTask(desc: string): Promise<TodosItemType> {
    try {
        let item = { desc, isActive: true } as TodosItemType;
        let response = await service.put(paths.createTask, item) as AxiosResponse;
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
export async function updateTask(item: TodosItemType): Promise<TodosItemType> {
    try {
        let response = await service.post(paths.updateTask, item) as AxiosResponse;
        return response.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
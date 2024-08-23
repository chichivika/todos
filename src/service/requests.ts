import axios from "axios";
import { paths } from "./paths";
import { TodosItemsType } from "utils/appUtils";
import { createMockAdapter } from "./mock/mockAdapter";
import { AxiosResponse } from "axios";

const service = axios.create({ baseURL: 'baseUrl/' });
createMockAdapter(service);

export async function getAllTasks(): Promise<TodosItemsType>
 {
    try {
        let response = await service.get(paths.getTasks) as AxiosResponse;
        return response.data;
    }
    catch{
        return [];
    }
}
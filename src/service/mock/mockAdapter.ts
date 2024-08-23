import MockAdapter from 'axios-mock-adapter';
import { paths } from 'service/paths';
import { AxiosInstance } from 'axios';
import { TodosItemsType, TodosItemType } from 'utils/appUtils';

const initialItems = [
  { desc: 'Learn new English words', isActive: true },
  { desc: 'Wash my car', isActive: true },
  { desc: 'Add mock server to the app', isActive: false }
]

export function createMockAdapter(service: AxiosInstance) {
  const mock = new MockAdapter(service, { delayResponse: 500 });

  mock.onGet(paths.getTasks).reply(200, [...initialItems]);
  mock.onDelete(paths.deleteTasks).reply(config => {
    const data = JSON.parse(config.data) as TodosItemsType;
    return [200, data.filter(item => item.isActive)];
  });
  mock.onPut(paths.createTask).reply(config => {
    const data = JSON.parse(config.data) as TodosItemType;
    return [200, {...data}];
  });
  mock.onPost(paths.updateTask).reply(config => {
    const data = JSON.parse(config.data) as TodosItemType;
    return [200, {...data}];
  });

  return mock;
}
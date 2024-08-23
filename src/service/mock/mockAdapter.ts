import MockAdapter from 'axios-mock-adapter';
import { paths } from 'service/paths';
import { AxiosInstance } from 'axios';

const items = [
  { desc: 'Learn new English words', isActive: true },
  { desc: 'Wash my car', isActive: true },
  { desc: 'Add mock server to the app', isActive: false }
]

export function createMockAdapter(service: AxiosInstance) {
  const mock = new MockAdapter(service, {delayResponse: 900});
  mock.onGet(paths.getTasks).reply(200, [...items]);
  return mock;
}
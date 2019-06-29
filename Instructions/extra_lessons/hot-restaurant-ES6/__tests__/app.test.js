const http = require('http');
const axios = require('axios');
const app = require('../app');

const PORT = 3000;
const server = http.createServer(app);

const mockData = [
  {
    name: 'ABC',
    email: 'email1@email.com',
    phone: '123-456-7890',
  },
  {
    name: 'EFG',
    email: 'email2@email.com',
    phone: '111-222-3333',
  },
  {
    name: 'HIJ',
    email: 'email3@email.com',
    phone: '222-333-4444',
  },
  {
    name: 'KLM',
    email: 'email4@email.com',
    phone: '123-456-789',
  },
  {
    name: 'NOP',
    email: 'email5@email.com',
    phone: '123-456-789',
  },
  {
    name: 'QRS',
    email: 'email6@email.com',
    phone: '123-456-789',
  },
];

describe('app', () => {
  beforeAll(async () => {
    server.listen(PORT);
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(async () => {
    const requests = mockData
      .map(table => axios.post('http://localhost:3000/api/tables', table));
    await Promise.all(requests);
  });

  afterEach(async () => {
    await axios.post('http://localhost:3000/api/clear');
  });

  it('should get all tables', async () => {
    const tableResponse = await axios.get('http://localhost:3000/api/tables')
      .then(res => res.data);

    expect(tableResponse).toEqual(mockData.slice(0, -1));
  });

  it('should get the wait list', async () => {
    const waitResponse = await axios.get('http://localhost:3000/api/waitlist')
      .then(res => res.data);

    expect(waitResponse).toEqual(mockData.slice(-1));
  });
});

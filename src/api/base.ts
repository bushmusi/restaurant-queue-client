// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Your Express API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCustomerQueues = async () => {
  const response = await api.get('/customer-queues');
  return response.data;
};

export const addHeadCount = async (headCount: number) => {
  const response = await api.post('/customer-queues/add-headcount', { headCount });
  return response.data;
};

export const fetchTables = async () => {
  const response = await api.get('/tables');
  return response.data;
};

export const addTables = async (numTables: number, numChairsPerTable: number) => {
  const response = await api.post('/tables/add-tables', { numTables, numChairsPerTable });
  return response.data;
};

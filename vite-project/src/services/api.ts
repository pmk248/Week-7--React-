import axios from 'axios';
import { Task, TaskFormData } from '../types/Task';

const BASE_URL = 'https://reactexambackend.onrender.com/missions/';
const API_KEY = import.meta.env.API_KEY;
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${BASE_URL}${API_KEY}`);
  return response.data;
};

export const addTask = async (data: TaskFormData): Promise<Task> => {
  const response = await axios.post(`${BASE_URL}${API_KEY}`, data);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}${API_KEY}/${id}`);
};

export const updateTaskStatus = async (id: string): Promise<Task> => {
  const response = await axios.post(`${BASE_URL}${API_KEY}/progress/${id}`);
  return response.data;
};
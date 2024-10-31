import React, { useState } from 'react';
import { addTask } from '../services/api';
import { TaskFormData } from '../types/Task';
const TaskForm: React.FC = () => {
  const [formData, setFormData] = useState<TaskFormData>({
    name: '',
    status: 'Pending',
    priority: '',
    description: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTask(formData);
    setFormData({ name: '', status: 'Pending', priority: '', description: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Task Name" required />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskForm;
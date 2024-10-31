import React from 'react';
import { Task } from '../types/Task';
import { updateTaskStatus, deleteTask } from '../services/api';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const handleStatusUpdate = async () => {
    await updateTaskStatus(task._id);
  };
  const handleDelete = async () => {
    await deleteTask(task._id);
  };
  const getStatusClass = (status: Task['status']) => {
    switch (status) {
      case 'Pending':
        return 'red-banner';
      case 'In Progress':
        return 'orange-banner';
      case 'Completed':
        return 'green-banner';
      default:
        return '';
    }
  };
  return (
    <div className={`task-item ${getStatusClass(task.status)}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      {task.status !== 'Completed' && (
        <button onClick={handleStatusUpdate}>Advance Status</button>
      )}
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};
export default TaskItem;
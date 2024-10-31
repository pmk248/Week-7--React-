import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../services/api';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';
const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
                console.log(data);
            } catch (err) {
                setError('Failed to load tasks:');
                console.log(err)
            }
        };
        loadTasks();
    }, []);
    
    return (
        <div>
            {error && <div className="error">{error}</div>}
            {tasks.map((task)=> (
                <TaskItem key={task._id} task={task}/>
            ))}
        </div>
    );
};
export default TaskList;
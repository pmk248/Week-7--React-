export interface Task {
    _id: string;
    name: string;
    status: "Pending" | "In Progress" | "Completed";
    priority: string;
    description: string;
}

export interface TaskFormData {
    name: string;
    status: "Pending";
    priority: string;
    description: string;
}
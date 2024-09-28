export type Project = {
    time: string;
    title: string;
    state: {
        name: string;
        variant: string;
    };
    description: string;
    progress: {
        value: number;
        variant: string;
    };
    member: string[];
}

export type Task = {
    id: number;
    title: string;
    time: string;
    variant: string;
    taskRatio: {
        completedTask: number;
        totalTask: number;
    };
    comment: number;
    priority: string;
}

import {fn} from '@storybook/test';
import Task from './Task';

export const ActionData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
}
export default {
    component: Task,
    title:'Task',
    tags:['autodocs'],
    excludeStories: /.*Data$/,
    args:{
        ...ActionData
    }
}
export const Default = {
    args:{
        task:{
            id:'1',
            title:'Test Task',
            state:'TASK_INBOX',
        }
    }
}
export const Pinned = {
    args:{
        task:{
            ...Default.args.task,
            state:'TASK_PINNED',
        }
    }
}
export const Archived = {
    args:{
        task:{
            ...Default.args.task,
            state:'TASK_ARCHIVED',
        }
    }
}

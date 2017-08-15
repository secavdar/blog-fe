import { CommonList } from './';

export class Post {
    id: number;
    title: string;
    content: string;
    createDate: Date;
    showCounter: number;
    isActive: boolean;
    tags: CommonList[] = [];
}
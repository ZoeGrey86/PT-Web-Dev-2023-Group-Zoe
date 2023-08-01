import { User } from "./user";

export class Event {
    id: string;
    user: User;
    title: string;
    start: string;
    end: string;
    description: string;
}

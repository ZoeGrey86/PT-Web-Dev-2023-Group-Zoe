// src/app/event.model.ts

export interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  rrule: {
    freq: string;
    interval: number;
    byweekday?: string;
    dtstart: string;
  };
}

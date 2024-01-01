import {create} from 'zustand';

interface TimeStore {
    time: Date;
    setTime: (date: Date) => void;
}

export const useTimeStore = create<TimeStore>(set => ({
    time: new Date(),
    setTime: (date: Date) => set({time: date})
}));
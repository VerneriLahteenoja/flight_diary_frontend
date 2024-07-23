import { Dispatch, SetStateAction } from "react";

export interface NotificationProps {
  message: string;
}

export interface MessageSetter {
  setMessage: Dispatch<SetStateAction<string>>;
}

export interface DiaryEntryFormProps {
  setMessage: Dispatch<SetStateAction<string>>;
  diaries: NonSensitiveDiaryEntry[];
  setDiaries: Dispatch<SetStateAction<NonSensitiveDiaryEntry[]>>;
}

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export interface DiaryListProps {
  diaryList: NonSensitiveDiaryEntry [];
}

export interface DiaryEntryProps {
  diaryEntry: NonSensitiveDiaryEntry;
}


export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;


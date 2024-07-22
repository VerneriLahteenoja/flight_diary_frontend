import axios from "axios";
import { NonSensitiveDiaryEntry } from "../types";

const baseUrl = 'http://localhost:3000';

export const getAll = async () => {
  const response = await axios.get<NonSensitiveDiaryEntry[]>(`${baseUrl}/api/diaries`);
  return response.data;
};

export const createDiaryEntry = async (data: object) => {
  const response = await axios.post(`${baseUrl}/api/diaries`, data);
  return response.data;
};
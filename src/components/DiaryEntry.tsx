// Individual diary entries
import { DiaryEntryProps } from "../types";

const DiaryEntry = (props: DiaryEntryProps) => {
  
  return (
    <div>
      <br />
      <b>{props.diaryEntry.date}</b>
      <br />
      weather: {props.diaryEntry.weather}
      <br />
      visibility: {props.diaryEntry.visibility}
    </div>
  );
};

export default DiaryEntry;
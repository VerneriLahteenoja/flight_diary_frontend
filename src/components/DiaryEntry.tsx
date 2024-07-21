// Individual diary entries
import { DiaryEntryProps } from "../types";

const DiaryEntry = (props: DiaryEntryProps) => {
  
  return (
    <div>
      <br />
      <b>{props.diaryEntry.date}</b>
      <br />
      {props.diaryEntry.weather}
      {props.diaryEntry.visibility}
    </div>
  );
};

export default DiaryEntry;
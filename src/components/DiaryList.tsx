// List diary entries
import { DiaryListProps } from "../types"
import DiaryEntry from "./DiaryEntry"

const DiaryList = (props: DiaryListProps) => {
  if (!props.diaryList || props.diaryList.length < 1) {
    return (
      <h2>No entries yet</h2>
    );
  };

  return (
    <div>
      <h2>Diary entries</h2>
      {props.diaryList.map(d => <DiaryEntry key={d.id} diaryEntry={d} />)}
    </div>
  );
};

export default DiaryList;
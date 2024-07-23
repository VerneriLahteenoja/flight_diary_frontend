// Form to add new diaries
import { useState } from "react";
import { createDiaryEntry } from "../services/diaryService";
import { DiaryEntryFormProps } from "../types";
import axios from "axios";


const DiaryEntryForm = (props: DiaryEntryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const addEntry = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log("addEntry clicked");
    //TODO: Add typing to newEntry
    const newEntry = {
      date,
      visibility,
      weather,
      comment
    };
    // Consider using other ways of state management
    // if necessary
    createDiaryEntry(newEntry)
      .then((res) => {
        const newDiaries = props.diaries.concat(res)
        props.setDiaries(newDiaries)
      })
      .catch(e => {
        if (axios.isAxiosError(e)) {
          props.setMessage(e.response?.data)
        } else {
          props.setMessage(String(e))
        }
        setTimeout(() => {
          props.setMessage("")
        }, 5000)
      })

    setDate('');
    setVisibility('');
    setWeather('');
    setComment('');
  };
  return (
    <form onSubmit={addEntry}>
      <label htmlFor="date">date</label>
      <input type="text" name="date" value={date} onChange={({target}) => setDate(target.value)}/>
      <br />
      <label htmlFor="visibility">visibility</label>
      <input type="text" name="visibility" value={visibility} onChange={({target}) => setVisibility(target.value)} />
      <br />
      <label htmlFor="weather">weather</label>
      <input type="text" name="weather" value={weather} onChange={({target}) => setWeather(target.value)} />
      <br />
      <label htmlFor="comment">comment</label>
      <input type="text" name="comment" value={comment} onChange={({target}) => setComment(target.value)} />
      <br />
      <button type="submit">add</button>
    </form>
  );
};

export default DiaryEntryForm;
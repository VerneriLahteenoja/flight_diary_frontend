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
      <label htmlFor="date">Date</label>
      <input type="date" min="2000-01-01" max="2050-01-01" name="date" value={date} onChange={({target}) => setDate(target.value)}/>
      <br />
        <div>
          Visibility:{' '}
          <label htmlFor="great">great</label>
          <input type="radio" id="great" name="visibility" value="great" onClick={() => setVisibility('great')} />
          <label htmlFor="good">good</label>
          <input type="radio" id="good" name="visibility" value="good" onClick={() => setVisibility('good')} />
          <label htmlFor="ok">ok</label>
          <input type="radio" id="ok" name="visibility" value="ok" onClick={() => setVisibility('ok')} />
          <label htmlFor="poor">poor</label>
          <input type="radio" id="poor" name="visibility" value="poor" onClick={() => setVisibility('poor')} />
        </div>
        <div>
          Weather:{' '}
          <label htmlFor="sunny">sunny</label>
          <input type="radio" id="sunny" name="weather" value="sunny" onClick={() => setWeather('sunny')} />
          <label htmlFor="rainy">rainy</label>
          <input type="radio" id="rainy" name="weather" value="rainy" onClick={() => setWeather('rainy')} />
          <label htmlFor="cloudy">cloudy</label>
          <input type="radio" id="cloudy" name="weather" value="cloudy" onClick={() => setWeather('cloudy')} />
          <label htmlFor="stormy">stormy</label>
          <input type="radio" id="stormy" name="weather" value="stormy" onClick={() => setWeather('stormy')} />
          <label htmlFor="windy">windy</label>
          <input type="radio" id="windy" name="weather" value="windy" onClick={() => setWeather('windy')} />
        </div>
      <label htmlFor="comment">Comment</label>
      <input type="text" name="comment" value={comment} onChange={({target}) => setComment(target.value)} />
      <br />
      <button type="submit">add</button>
    </form>
  );
};

export default DiaryEntryForm;
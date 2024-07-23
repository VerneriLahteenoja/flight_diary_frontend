import { useEffect, useState } from "react"
import { getAll } from "./services/diaryService"
import DiaryEntryForm from "./components/DiaryEntryForm"
import DiaryList from "./components/DiaryList"
import { NonSensitiveDiaryEntry } from "./types"
import Notification from "./components/Notification"


function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getAll().then(data => {
      setDiaries(data)
    })
  }, []);
  
  console.log(diaries)
  return (
    <div>
      {message && <Notification message={message} />}
      <DiaryEntryForm setMessage={setMessage} diaries={diaries} setDiaries={setDiaries}/>
      <DiaryList diaryList={diaries}/>    
    </div>
  )
}

export default App

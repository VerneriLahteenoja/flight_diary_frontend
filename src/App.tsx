import { useEffect, useState } from "react"
import { getAll } from "./services/diaryService"
import DiaryEntryForm from "./components/DiaryEntryForm"
import DiaryList from "./components/DiaryList"
import { NonSensitiveDiaryEntry } from "./types"


function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    getAll().then(data => {
      setDiaries(data)
    })
  }, []);
  
  console.log(diaries)
  return (
    <div>
      <DiaryEntryForm />
      <DiaryList diaryList={diaries}/>
    </div>
  )
}

export default App

import DiaryEntryForm from "./components/DiaryEntryForm"
import DiaryList from "./components/DiaryList"


function App() {
  //TODO: Call axios services
  return (
    <div>
      <DiaryEntryForm />
      <DiaryList diaryList={[]}/>
    </div>
  )
}

export default App

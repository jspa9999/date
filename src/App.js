import './App.css';
import moment from "moment";

function App() {

  let monthsArray = ["January","February","March","April","May","june",
    "july","august","september","october","November","December"]

    let daysArray = ["Monday","Tuesday","wednesday","Thursday","Friday","saturday","sunday"];

  let memorableDay = new Date(1950,2,19,7,20,30,600);

  //memorableDay.setFullYear(2019)
  console.log(memorableDay);
  console.log(memorableDay.getFullYear());
  console.log(monthsArray[memorableDay.getMonth()]);
  console.log(daysArray[memorableDay.getDay()]);
  console.log(memorableDay.getHours());
  console.log(memorableDay.getMinutes());
  console.log(memorableDay.getSeconds());
  console.log(memorableDay.getMilliseconds());
  console.log(memorableDay.getTime());
  
 // let oldDate = new Date("08 may 2010");
 // console.log(oldDate);

  return (
    <div className="App">
      <form>
        <div>
          <label>Date</label>
          <input type = "date" onChange = {(eo)=>{
            let studyStartDate = new Date(eo.target.value);

            let courseDuration = 120*24*60*60*1000;

            let courseEndDateInMS = studyStartDate.getTime()+courseDuration;
          
            let studyEndDate = new Date(courseEndDateInMS);
            console.log(studyStartDate);
            console.log(studyEndDate);
            console.log(moment(studyEndDate).format("MMMM Do YYYY, h:mm:ss a"));

            console.log(moment().add(120, "days").calendar() );
           
          }}></input>

          <button type="button" onClick = {()=>{
             console.log(Date.now());
          }}>time in ms</button>
        </div>
      </form>
    </div>
  );
}

export default App;

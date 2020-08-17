import React, {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios';
import Slider from './slider';

function App() {

  const [temp, setTemp] = useState([])
  const [currentHour, setCurrentHour] = useState(0)
  const [hourDisplayed, setHourDisplayed] = useState(0)

  useEffect(()=>{
    setCurrentHour(new Date().getHours())
    Axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=19.702188&lon=-103.464852&exclude=minutely&units=metric&appid=APPID')
    .then(res => setTemp(res.data.hourly.map((x) => {
      return x.feels_like
    })))
  },[])

  const weatherColor = () => {
    if (temp[hourDisplayed] < 20) return 'blue'
    else if (temp[hourDisplayed] < 24) return 'green'
    else if (temp[hourDisplayed] < 28) return 'yellow'
    else if (temp[hourDisplayed] < 32) return 'orange'
    else return 'red'    
  }

  const changeHour = (event) => {
    setHourDisplayed(Number(event.target.value))
  }

  const getHourText = () => {
    if (currentHour + hourDisplayed > 24){
      return (currentHour+hourDisplayed-24) + " de Mañana"
    }
    else return (currentHour+hourDisplayed)
  }

  return (
    <div className={"app " + weatherColor()}>
      <p>
        El clima actual en guzman es de <b>{temp[hourDisplayed]} °C</b>
      </p>
      <Slider hourDisplayed={hourDisplayed} handleHour={()=>changeHour}/>
      <p>
        El Clima de las <b>{getHourText()}</b>
      </p>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoadingBar from "./LoadingBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.calcule();
  }

  calcule() {
    var todayseconds = new Date(),
      seconds = todayseconds.getSeconds();

    var todayminutes = new Date(),
      minutes = todayminutes.getMinutes();

    var todayhour = new Date(),
      hour = todayhour.getHours();

    var todaydate = new Date(),
      date =
        todaydate.getDate() +
        "/" +
        (todaydate.getMonth() + 1) +
        "/" +
        todaydate.getFullYear();

    var todayday = new Date(),
      day = todayday.getDay();

    var todaymonth = new Date(),
      month = todaymonth.getMonth();

    var todayyear = new Date(),
      year = todayyear.getFullYear();

    var YearPercentage = (month / 12) * 100;
    var WeekPercentage = (day / 7) * 100;
    var DayPercentage = ((hour * 3600 + minutes * 60 + seconds) / 86400) * 100;

    return {
      date: date,
      minutes: minutes,
      hour: hour,
      year: year,
      month: month,
      day: day,
      seconds: seconds,
      YearPercentage: YearPercentage,
      WeekPercentage: WeekPercentage,
      DayPercentage: DayPercentage
    };
  }
  stateUpdate() {
    this.setState(this.calcule());
  }

  render() {
    return (
      <div className="App">
        <p class="h2">Hello there!</p>
        <p class="h5">
          Today is the {this.state.date} and it's {this.state.hour}:
          {this.state.minutes}:{this.state.seconds}.
        </p>
        <LoadingBar
          class="year"
          label="How much is left this year ?"
          percentage={this.state.YearPercentage}
        />
        <LoadingBar
          class="week"
          label="How much is left this month ?"
          percentage={this.state.WeekPercentage}
        />
        <LoadingBar
          class="day"
          label="How much is left today ?"
          percentage={this.state.DayPercentage}
        />
        <button onClick={this.stateUpdate.bind(this)}>UPDATE</button>
      </div>
    );
  }
}

export default App;

export default class TimeConverter {
    constructor(year) {
      this.secondsPerMinute = 60;
      this.minutesPerHour = 60;
      this.hoursPerDay = 24;
      this.year = year; 
    }
    
    getSecondsPerHour() {
      return this.secondsPerMinute * this.minutesPerHour;
    }
    
    getSecondsPerDay() {
      return this.getSecondsPerHour() * this.hoursPerDay;
    }
    
    getSecondsPerMonth(month) {
      let startOfMonth = new Date(this.year, month, 1);
      let endOfMonth = new Date(this.year, month + 1, 1);
      return (endOfMonth - startOfMonth) / 1000;
    }
    
    getSecondsInEachMonth() {
      let secondsInEachMonth = [];
      for (let month = 0; month < 12; month++) {
        secondsInEachMonth.push(this.getSecondsPerMonth(month));
      }
      return secondsInEachMonth;
    }
  }
  
  export const converter = new TimeConverter(2023);
  
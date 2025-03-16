import moment from "moment";

// Get the current time
export const getCurrentTime = () => new Date();
// Get the time after a certain number of seconds
export const getTimeAfterSeconds = (seconds) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);
  return time;
};
// Get the time after a certain number of minutes
export const getTimeAfterMinutes = (minutes) => {
  const time = new Date();
  time.setMinutes(time.getMinutes() + minutes);
  return time;
};
// Get the time after a certain number of hours
export const getTimeAfterHours = (hours) => {
  const time = new Date();
  time.setHours(time.getHours() + hours);
  return time;
};
// Get the time after a certain number of days
export const getTimeAfterDays = (days) => {
  const time = new Date();
  time.setDate(time.getDate() + days);
  return time;
};
// Get the time after a certain number of months
export const getTimeAfterMonths = (months) => {
  const time = new Date();
  time.setMonth(time.getMonth() + months);
  return time;
};
// Get the time after a certain number of years
export const getTimeAfterYears = (years) => {
  const time = new Date();
  time.setFullYear(time.getFullYear() + years);
  return time;
};
// Get the difference between two times in seconds
export const getDifferenceInSeconds = (time1, time2) =>
  Math.abs((time1 - time2) / 1000);
// Get the difference between two times in minutes
export const getDifferenceInMinutes = (time1, time2) =>
  Math.abs((time1 - time2) / 1000 / 60);
//  Get the difference between two times in hours
export const getDifferenceInHours = (time1, time2) =>
  Math.abs((time1 - time2) / 1000 / 60 / 60);
//  Get the difference between two times in days
export const getDifferenceInDays = (time1, time2) =>
  Math.abs((time1 - time2) / 1000 / 60 / 60 / 24);
//  Get the difference between two times in months
export const getDifferenceInMonths = (time1, time2) =>
  Math.abs((time1 - time2) / 1000 / 60 / 60 / 24 / 30);
//  Get the difference between two times in years
export const getDifferenceInYears = (time1, time2) =>
  Math.abs((time1 - time2) / 1000 / 60 / 60 / 24 / 365);
//  Get the time in a specific format
export const getTimeInFormat = (time, format) => moment(time).format(format);
//  Get the time in a specific timezone
export const getTimeInTimezone = (time, timezone) => moment(time).tz(timezone);
//  Get the time in a specific locale
export const getTimeInLocale = (time, locale) => moment(time).locale(locale);
//  Get the time in a specific language
export const getTimeInLanguage = (time, language) =>
  moment(time).locale(language);
//  Get the time in a specific calendar
export const getTimeInCalendar = (time, calendar) =>
  moment(time).calendar(calendar);
//  Get the time in a specific week
export const getTimeInWeek = (time, week) => moment(time).week(week);
//  Get the time in a specific day
export const getTimeInDay = (time, day) => moment(time).day(day);
//  Get the time in a specific month
export const getTimeInMonth = (time, month) => moment(time).month(month);

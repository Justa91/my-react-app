import React from "react";

export default function FormattedDate(props) {
  let months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  let day = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  return (
    <p>
      {day} {month}, {year} | {hours}:{minutes}
    </p>
  );
}

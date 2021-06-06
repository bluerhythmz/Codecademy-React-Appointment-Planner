import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
    console.log("changed")
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input type="text" placeholder="Enter Title" onChange={handleTitleChange} value={title} />
    <label htmlFor="">Date</label>
      <input type="date" min={getTodayString()} onChange={handleDateChange} value={date} />
      <label htmlFor="">Time</label>
      <input type="time" onChange={handleTimeChange} value={time} />
      <ContactPicker contacts={contacts} handleContactChange={handleContactChange} />
      <input type="submit" value="Submit Appointment" />
    </form>
  );
};

import React from "react";

export const ContactPicker = ({contacts, handleContactChange}) => {
  console.log(contacts)
  return (
    <select name="" id="" onChange={handleContactChange}>
      <option value=""></option>
      {contacts.map((contact, index) => {
        return <option key={index} value={contact.name} >{contact.name}</option>
      })}
    </select>
  );
};

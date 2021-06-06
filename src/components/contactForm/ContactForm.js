import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" onChange={handleNameChange} value={name} placeholder="Enter Name" />
      <label htmlFor="">Phone</label>
      <input type="tel" onChange={handlePhoneChange} value={phone} placeholder="Enter Phone Number -- ex: 111-111-1111" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <label htmlFor="">Email</label>
      <input type="email" onChange={handleEmailChange} value={email} placeholder="Enter Email Address" />
      <input type="submit" value="Submit Contact" />
    </form>
  );
};

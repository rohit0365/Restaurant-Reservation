// import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
 
  
  const [inputUser, setInputUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const res = await axios.post("http://localhost:8000/createuser", inputUser);
    console.log(res);
    toast.success( "Saved successfully");
    navigate("/success");
  } catch (error) {
        toast.error(error.response?.data.message || "An error occurred");
      }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={inputUser.firstName}
                  onChange={handleChnage}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={inputUser.lastName}
            onChange={handleChnage}
                />
              </div>
              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  required
                  value={inputUser.date}
            onChange={handleChnage}
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Time"
                  required
                  value={inputUser.time}
            onChange={handleChnage}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email_tag"
                  required
                  value={inputUser.email}
            onChange={handleChnage}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={inputUser.phone}
            onChange={handleChnage}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="table_no"
                  placeholder="Table No"
                  required
                  value={inputUser.table_no}
                  onChange={handleChnage}
                />
                <input
                  type="text"
                  name="area"
                  placeholder="Area"
                  required
                  value={inputUser.area}
                  onChange={handleChnage}
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>

              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
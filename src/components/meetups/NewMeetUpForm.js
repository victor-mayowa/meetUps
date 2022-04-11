import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetUpForm.module.css";
import Axios from "../Api/axios";
import { useNavigate } from "react-router-dom";

const NewMeetUpForm = () => {

  const navigate = useNavigate()
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInput = useRef();
  const descriptionInputValue = useRef()

  const submitHandler = async(e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInput.current.value;
   const enteredDescription = descriptionInputValue.current.value

   const meetupData = {
     title: enteredTitle,
     image: enteredImage,
     address: enteredAddress,
     description : enteredDescription
   }


   await Axios.post("meetups.json",meetupData)
    navigate("/")
    console.log(meetupData)
  
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="Address">Address</label>
          <input type="text" required id="Address" ref={addressInput} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descriptionInputValue}></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetUpForm;

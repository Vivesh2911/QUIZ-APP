import React, { useState } from 'react';
import styles from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubjectChange(e) {
    setSelectedSubject(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (selectedSubject === "Physics") {
      navigate("/Physics");
    } else if (selectedSubject === "Chemistry") {
      navigate("/Chemistry");
    } else if (selectedSubject === "Maths") {
      navigate("/Maths");
    }
  }

  return (
    <>
      <h1 className={styles.headi}>Welcome To Our Quiz App</h1>
      <div className={styles.Screenone}>
        <div className={styles.details}>
          <input type="text" placeholder='Enter Your Name' className={styles.inp} value={name} onChange={handleChange} />
          <br />
          <select name="sub" id="Subjects" className={styles.opt} value={selectedSubject} onChange={handleSubjectChange}>
            <option value="">Select Subject</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Maths">Maths</option>
          </select>
          <br />
          <button className={styles.btn} onClick={handleClick}>Go To Quiz</button>
        </div>
      </div>
    </>
  );
}

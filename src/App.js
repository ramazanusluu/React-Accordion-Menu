import React, { useState } from "react";
import "./App.css";

function App() {
  const [seleced, setSelected] = useState(null);
  const toggle = (i) => {
    if (seleced === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const toggleLeave = (i) => {
    if (seleced === i) {
      return setSelected(null);
    }
    setSelected(null);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div key={i} className="item">
            <div
              className="title"
              onMouseEnter={() => toggle(i)}
              onClick={() => console.log("selam")}
            >
              <h2>{item.question}</h2>
              <span>{seleced === i ? "-" : "+"}</span>
            </div>
            <div
              onMouseLeave={() => toggleLeave(i)}
              className={seleced === i ? "content show" : "content"}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex, iste deleniti nihil vero eligendi culpa! At quam pariatur ad officiis impedit laudantium, necessitatibus corporis ea, asperiores provident ullam aliquid quas beatae consectetur consequuntur assumenda ipsum placeat, sed odit quis cum. Ipsum laboriosam reiciendis itaque alias ullam consequatur doloribus nam?",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex, iste deleniti nihil vero eligendi culpa! At quam pariatur ad officiis impedit laudantium, necessitatibus corporis ea, asperiores provident ullam aliquid quas beatae consectetur consequuntur assumenda ipsum placeat, sed odit quis cum. Ipsum laboriosam reiciendis itaque alias ullam consequatur doloribus nam?",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex, iste deleniti nihil vero eligendi culpa! At quam pariatur ad officiis impedit laudantium, necessitatibus corporis ea, asperiores provident ullam aliquid quas beatae consectetur consequuntur assumenda ipsum placeat, sed odit quis cum. Ipsum laboriosam reiciendis itaque alias ullam consequatur doloribus nam?",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex, iste deleniti nihil vero eligendi culpa! At quam pariatur ad officiis impedit laudantium, necessitatibus corporis ea, asperiores provident ullam aliquid quas beatae consectetur consequuntur assumenda ipsum placeat, sed odit quis cum. Ipsum laboriosam reiciendis itaque alias ullam consequatur doloribus nam?",
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex, iste deleniti nihil vero eligendi culpa! At quam pariatur ad officiis impedit laudantium, necessitatibus corporis ea, asperiores provident ullam aliquid quas beatae consectetur consequuntur assumenda ipsum placeat, sed odit quis cum. Ipsum laboriosam reiciendis itaque alias ullam consequatur doloribus nam?",
  },
];

export default App;

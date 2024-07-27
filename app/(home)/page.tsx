"use client";

import Link from "next/link";
import { useCursors } from "./cursors-provider";
import React, { useState } from "react";
import "./styles.css"; // Ensure this path is correct

export default function Home() {
  const { getCount } = useCursors();
  const count = getCount();

  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const [inputText, setInputText] = useState("");

  const readOnlyText =
    "TEST test TEST TEST test TEST TEST test TEST TEST test TEST TEST test TEST TEST test TEST TEST test TEST TEST test TEST TEST test TEST";

  const updateProgress = (index: number, value: number) => {
    const newProgress = [...progress];
    newProgress[index] = value;
    setProgress(newProgress);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);

    const correctChars = value
      .split("")
      .filter((char, index) => char === readOnlyText[index]).length;
    const progressValue = (correctChars / readOnlyText.length) * 100;
    updateProgress(0, progressValue); // Assuming you want to update the first progress bar
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div>
        {progress.map((value, index) => (
          <div key={index} className="progress-container">
            <div
              id={`progress${index + 1}`}
              className="progress-bar"
              style={{ width: `${value}%` }}
            ></div>
            <img
              src="./car.png"
              alt="Car"
              className="car"
              id={`car${index + 1}`}
              style={{ left: `${value}%` }}
            />
            <div className="slider-container">
              <label htmlFor={`slider${index + 1}`}>
                Progress {index + 1}:
              </label>
              <input
                type="range"
                id={`slider${index + 1}`}
                className="slider"
                min="0"
                max="100"
                value={value}
                onChange={(e) => updateProgress(index, Number(e.target.value))}
              />
            </div>
          </div>
        ))}
        <div className="textbox-container">
          <input
            type="text"
            value={readOnlyText}
            readOnly
            className="textbox"
          />
          <input
            type="text"
            placeholder="Enter text here"
            className="textbox"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

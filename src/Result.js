import React from "react";

export default function Result({ secretNum, term }) {
  let result = "";

  const numTerm = Number(term); // Convert input to a number

  if (!isNaN(numTerm) && term !== "") { // Ensure input is a valid number
    if (numTerm > secretNum) {
      result = "higher";
    } else if (numTerm < secretNum) {
      result = "lower";
    } else if (numTerm === secretNum) {
      result = "You guessed the correct number!";
    }
  }

  return <h3>You guessed: {result || "Enter a number"}</h3>;
}

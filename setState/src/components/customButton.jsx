import React from "react";


// export const CustomButton = () => {
//   const handleClick = () => {
//     alert("Thanks for liking!");
//   };

//    return <button onClick={handleClick}>Like</button>;
// //   return <button onClick={() => alert("Thanks for liking!!")}>Like</button>;

const CustomButton = ({ text }) => {
  const name = "Codevolution";

  const handleClick = () => {
    console.log(`Hey ${name}, you clicked ${text}`);
  };

  return <button onClick={handleClick}>{text}</button>;
};



export default CustomButton;
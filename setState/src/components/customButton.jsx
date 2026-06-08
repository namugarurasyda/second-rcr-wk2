import React from "react";


export const CustomButton = () => {
  const handleClick = () => {
    alert("Thanks for liking!");
  };

   return <button onClick={handleClick}>Like</button>;
//   return <button onClick={() => alert("Thanks for liking!!")}>Like</button>;


}
export default CustomButton;
import React , {useState} from "react";
import  ActionButton from "./ActionButton";

export const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        alert(`Thank you for subscribing to our newsletter with email: ${email}`);
    
    }
  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};
 export default Newsletter;

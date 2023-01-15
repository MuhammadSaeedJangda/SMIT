import React, { useRef } from 'react';
import "./Form.css";


const Container : React.FC = () => {
    const emailInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      const email = emailInput.current?.value??'';
      localStorage.setItem('email', email);
    };
  
    return (
      <div className="formall">
        <h2 className="heading">Saylani Guide</h2>
        <form>
          <input className="holder" type="email" placeholder="Enter your email address" ref={emailInput} />
          <button type="submit" className="submit-button" onClick={handleClick}>Submit</button>
        </form>
      </div>
    );
  };
  
  export default Container;
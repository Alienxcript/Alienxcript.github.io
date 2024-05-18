import "./Formstyle.css"
import React from 'react';


const Forms = () => {

  const [result, setResult] = React.useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce616749-5be8-4e40-a02d-a1c58a3faaea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='forms'>
                <form onSubmit={sendEmail}>
                  <label>Your Name</label>
                  <input type="text" name="user_name" required></input>
                  
                  <label>Email</label>
                  <input type="email"  name="user_email" required></input>
                  
                  <label>Subject</label>
                  <input type="subject"  name="subject" required></input>

                  <label>Message</label>
                  <textarea rows="6" name="Message" placeholder="Type your massage here" required>
                  </textarea>
                  <button className="btn" type="submit">Submit</button>
                </form> 
                <span>{result}</span>
    </div>
          
  )
}

export default Forms

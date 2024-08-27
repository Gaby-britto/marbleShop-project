import "./form.css";
import contact from "../assets/contact.png";

const Form = () => {
  return (
   <div className="containerForm">
     <div className="form-controll">
      <img src={contact} alt="" className="imgForm" />

      <form action="" className="form">
        <label htmlFor="name">Name</label>
        <input type="text" />

        <label htmlFor="email">Email</label>
        <input type="text" />

        <label htmlFor="phone" placeholder="Your Phone">Phone</label>
        <input type="text" />

        <button>Send</button>
      </form>
    </div>
   </div>
  );
};

export default Form;

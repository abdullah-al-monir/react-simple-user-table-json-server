import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/formData", formData)
      .then((response) => {
        console.log(response.data);
        router("/");
      })
      .catch((error) => {
        console.error("There was an error saving the form data!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-x-5">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;

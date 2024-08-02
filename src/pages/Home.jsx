import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/formData")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the form data!", error);
      });
  }, []);

  return (
    <div>
      <Link to="/form">Add Data</Link>
      <h1>Form Data Preview</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

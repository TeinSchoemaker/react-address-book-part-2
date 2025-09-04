import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../App";

function AddContact() {
  const navigate = useNavigate();
  const { api } = useContext(ApiContext);
  const url = `${api}/contact`;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/");
      } else {
        alert("Failed to add contact.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Contact</h2>
      <label>
        First Name:
        <input
          name="first-name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          name="last-name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street:
        <input name="street" value={formData.street} onChange={handleChange} />
      </label>
      <br />
      <label>
        City:
        <input name="city" value={formData.city} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddContact;

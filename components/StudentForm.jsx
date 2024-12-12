import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ensure styles are included

const StudentForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    roll: '',
    department: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const validationErrors = {};
    if (!formValues.name.trim()) validationErrors.name = 'Name is required';
    if (!formValues.roll.trim()) validationErrors.roll = 'Roll number is required';
    if (!formValues.department.trim()) validationErrors.department = 'Department is required';
    if (!/^[0-9]{10}$/.test(formValues.phone)) validationErrors.phone = 'Phone number must be 10 digits';
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email))
      validationErrors.email = 'Enter a valid email address';
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      try {
        const response = await axios.post('http://localhost:5000/submit', formValues);
        setSuccessMessage(response.data.message);
        setFormValues({ name: '', roll: '', department: '', phone: '', email: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSuccessMessage('Failed to submit form. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="page-container">
      <div className="card-container">
        <h2 className="card-heading">Student Login</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          {[
            { label: 'NAME', name: 'name', type: 'text' },
            { label: 'ROLL', name: 'roll', type: 'text' },
            { label: 'DEPARTMENT', name: 'department', type: 'text' },
            { label: 'PHONE NUMBER', name: 'phone', type: 'tel', placeholder: '10-digit phone number' },
            { label: 'EMAIL', name: 'email', type: 'email', placeholder: 'example@example.com' },
          ].map((field) => (
            <div key={field.name} className="form-group">
              <label htmlFor={field.name} className="form-label">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formValues[field.name]}
                onChange={handleChange}
                className="input-field"
                placeholder={field.placeholder || ''}
              />
              {errors[field.name] && <p className="error-message">{errors[field.name]}</p>}
            </div>
          ))}
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
      <footer className="footer">© 2024 Student Portal</footer>
    </div>
  );
};

export default StudentForm;

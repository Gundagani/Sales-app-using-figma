import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home({ onCategoryClick }) {
  return (
    <div className="home">
      <h1>Welcome to the Sales App</h1>
      <div className="categories">
        <button onClick={() => onCategoryClick('retail')}>Retail</button>
        <button onClick={() => onCategoryClick('hotel')}>Hotel</button>
        <button onClick={() => onCategoryClick('education')}>Education</button>
        <button onClick={() => onCategoryClick('technology')}>Technology</button>
      </div>
    </div>
  );
}

function Category({ category, customers, onCustomerClick, onBackClick, onHomeClick }) {
  return (
    <div className="category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Customers</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index} onClick={() => onCustomerClick(customer)}>
            {customer.name}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button onClick={onHomeClick}>Home</button>
      </div>
    </div>
  );
}

function CustomerDetail({ customer, onBackClick, onHomeClick, category }) {
  return (
    <div className="customer-detail">
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Contact: {customer.contact}</p>
      <p>Email: {customer.email}</p>
      <p>Address: {customer.address}</p>
      <p>Revenue: {customer.revenue}</p>
      <div className="buttons">
        <button onClick={onBackClick}>Back to {category.charAt(0).toUpperCase() + category.slice(1)} Customers</button>
        <button onClick={onHomeClick}>Home</button>
      </div>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = {
    retail: [
      { name: "Raghavendra Rao", contact: "9898765432", email: "raghavendra@retail.com", address: "12, MG Road, Hyderabad", revenue: "₹45,000" },
      { name: "Priya Reddy", contact: "9876543210", email: "priya@retail.com", address: "14, Jubilee Hills, Hyderabad", revenue: "₹35,000" },
      { name: "Venkatesh Babu", contact: "9503456789", email: "venkatesh@retail.com", address: "23, Banjara Hills, Hyderabad", revenue: "₹60,000" },
      { name: "Sravani K", contact: "9334356789", email: "sravani@retail.com", address: "30, Gachibowli, Hyderabad", revenue: "₹50,000" },
    ],
    hotel: [
      { name: "Ramaiah Hotel", contact: "040-2345678", email: "info@ramaiahhotel.com", address: "101, Tank Bund Road, Hyderabad", revenue: "₹2,00,000" },
      { name: "Hotel Golkonda", contact: "040-3434567", email: "booking@golkondahotel.com", address: "35, Banjara Hills, Hyderabad", revenue: "₹3,50,000" },
      { name: "Taj Krishna", contact: "040-3456789", email: "tajkrishna@hotel.com", address: "10, Raj Bhavan Road, Hyderabad", revenue: "₹4,00,000" },
      { name: "Marriott Hyderabad", contact: "040-4556789", email: "marriott@hyderabad.com", address: "22, Begumpet, Hyderabad", revenue: "₹5,00,000" },
    ],
    education: [
      { name: "Sri Chaitanya Junior College", contact: "040-2345789", email: "info@srichaitanya.edu", address: "45, Ameerpet, Hyderabad", revenue: "₹10,00,000" },
      { name: "Vikas High School", contact: "040-3334567", email: "vikas@school.com", address: "60, Madhapur, Hyderabad", revenue: "₹12,00,000" },
      { name: "Narayana Institute", contact: "040-1112233", email: "info@narayanainstitute.edu", address: "80, KPHB, Hyderabad", revenue: "₹15,00,000" },
      { name: "Bharatiya Vidya Bhavan", contact: "040-5647389", email: "bharatiya@school.edu", address: "10, Secunderabad", revenue: "₹9,50,000" },
    ],
    technology: [
      { name: "TechTonic Solutions", contact: "9887654321", email: "tech@techtonic.com", address: "100, Hi-tech City, Hyderabad", revenue: "₹1,00,000" },
      { name: "CyberTech Innovations", contact: "9887654320", email: "contact@cybertech.com", address: "5, Gachibowli, Hyderabad", revenue: "₹1,50,000" },
      { name: "InnovaTech", contact: "9678765432", email: "support@innovatech.com", address: "3, Kondapur, Hyderabad", revenue: "₹2,00,000" },
      { name: "Xtreme Technologies", contact: "9688765433", email: "info@xtremetech.com", address: "17, Punjagutta, Hyderabad", revenue: "₹3,00,000" },
    ],
  };

  const onCategoryClick = (category) => {
    setCategory(category);
  };

  const onCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const onBackClick = () => {
    setSelectedCustomer(null);
  };

  const onHomeClick = () => {
    setSelectedCustomer(null);
    setCategory(null);
  };

  return (
    <Router>
      <div className="app">
        <div className="app-background">
          {!category && !selectedCustomer && (
            <Home onCategoryClick={onCategoryClick} />
          )}

          {category && !selectedCustomer && (
            <Category
              category={category}
              customers={customers[category]}
              onCustomerClick={onCustomerClick}
              onHomeClick={onHomeClick}
            />
          )}

          {selectedCustomer && (
            <CustomerDetail
              category={category} // pass category to CustomerDetail
              customer={selectedCustomer}
              onBackClick={onBackClick}
              onHomeClick={onHomeClick}
            />
          )}
        </div>
      </div>
    </Router>
  );
}
export default App;

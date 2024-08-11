import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = ({ filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    setFilters({
      ...filters,
      price: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilters({
      date: "",
      location: "",
      type: "",
      price: "",
      duration: "",
      search: "",
    });
  };

  return (
    <>
      <div className="filter-icon" onClick={() => setShowFilters(!showFilters)}>
        &#x2630;
      </div>
      <div className={`filter ${showFilters ? "filter-dropdown" : ""}`}>
        <div className="filter-group">
          {/* <label>Type:</label> */}
          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">Type</option>
            <option value="Signature">Signature</option>
            <option value="Standalone">Standalone</option>
          </select>
        </div>
        <div className="filter-group">
          {/* <label>Date:</label> */}
          <input
            type="text"
            name="date"
            value={filters.date}
            onChange={handleChange}
            placeholder="Select Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <div className="filter-group">
          {/* <label>Location:</label> */}
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">Location</option>
            <option value="Goa">Goa</option>
            <option value="Rishikesh">Rishikesh</option>
            <option value="Kerala">Kerala</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div className="filter-group">
          {/* <label>Duration:</label> */}
          <input
            type="number"
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            placeholder="Duration (days)"
            min="1"
          />
        </div>
        <div className="filter-group">
          {/* <label>Price Range:</label> */}
          <select
            name="price"
            value={filters.price}
            onChange={handlePriceChange}
          >
            <option value="">Price Range</option>
            <option value="100-200">$100-$200</option>
            <option value="200-300">$200-$300</option>
            <option value="300-500">$300-$500</option>
            <option value="500-1000">$500-$1000</option>
          </select>
        </div>
        <div className="filter-group search">
          {/* <label>Search by Title:</label> */}
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search by Title"
          />
        </div>
        <div className="filter-group">
          <button onClick={resetFilters}>
            <FontAwesomeIcon icon=" fa-trash" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;

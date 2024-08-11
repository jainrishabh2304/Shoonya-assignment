import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ScrollToTopButton from "./ScrollToTopButton";

const RetreatList = () => {
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    type: "",
    price: "",
    duration: "",
    search: "",
  });
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [retreatsPerPage] = useState(3);

  const retreats = [
    {
      title: "Weight Loss Retreat",
      description:
        "A 7-day retreat focused on weight loss through yoga and diet.",
      date: "2024-11-25",
      location: "Kerala",
      price: 700,
      type: "Signature",
      condition: "Weight Loss",
      image:
        "https://cdn.midjourney.com/bc82ebc6-a3a4-4eda-be0b-bb3e65d4b8d3/0_1.jpeg",
      tag: ["weight loss", "diet", "yoga"],
      duration: 7,
      id: "3",
    },
    {
      title: "General Fitness Yoga Camp",
      description:
        "A 3-day yoga camp to enhance overall fitness and well-being.",
      date: "2024-10-05",
      location: "Mumbai",
      price: 300,
      type: "Standalone",
      condition: "General Fitness",
      image:
        "https://cdn.midjourney.com/930ec767-aa6d-46e6-92a6-f019a9718304/0_3.jpeg",
      tag: ["fitness", "yoga", "camp"],
      duration: 3,
      id: "4",
    },
    {
      title: "Chronic Pain Management",
      description:
        "A weekend retreat to manage chronic pain through specialized yoga techniques.",
      date: "2024-10-15",
      location: "Delhi",
      price: 250,
      type: "Signature",
      condition: "Chronic Pain Management",
      image:
        "https://cdn.midjourney.com/5b0cec06-2f37-4828-8602-316f6dbd0eb6/0_0.jpeg",
      tag: ["pain management", "yoga", "weekend"],
      duration: 2,
      id: "5",
    },
    {
      title: "Mental Wellness Retreat",
      description:
        "A 4-day retreat focused on mental wellness through yoga and meditation.",
      date: "2024-10-10",
      location: "Pune",
      price: 400,
      type: "Standalone",
      condition: "Mental Wellness",
      image:
        "https://cdn.midjourney.com/32923aeb-db8c-4c27-8e9d-fb82928b7fc1/0_2.jpeg",
      tag: ["mental wellness", "meditation", "yoga"],
      duration: 4,
      id: "6",
    },
    {
      title: "Yoga Event 14",
      description: "A description for Yoga Event 14.",
      date: "2024-11-15",
      location: "Chennai",
      price: 107,
      type: "Standalone",
      condition: "Mental Wellness",
      image:
        "https://cdn.midjourney.com/e6c8452a-af8e-4cd3-b15a-c3dcf2a696a5/0_3.jpeg",
      tag: ["workshop", "weight loss", "meditation"],
      duration: 7,
      id: "14",
    },
    {
      title: "Yoga Event 17",
      description: "A description for Yoga Event 17.",
      date: "2024-12-01",
      location: "Goa",
      price: 555,
      type: "Standalone",
      condition: "Mental Wellness",
      image:
        "https://cdn.midjourney.com/2f72aafd-e2f2-4bec-8afc-80877aa4634f/0_0.jpeg",
      tag: ["yoga", "camp", "weekend"],
      duration: 6,
      id: "17",
    },
    {
      title: "Yoga Event 19",
      description: "A description for Yoga Event 19.",
      date: "2024-10-25",
      location: "Rishikesh",
      price: 219,
      type: "Standalone",
      condition: "Mental Wellness",
      image:
        "https://cdn.midjourney.com/e0dba42d-84bc-45e6-acca-bbaf8f817371/0_1.jpeg",
      tag: ["diet", "weekend", "flexibility"],
      duration: 7,
      id: "19",
    },
    {
      title: "Yoga Event 11",
      description: "A description for Yoga Event 11.",
      date: "2024-11-05",
      location: "Pune",
      price: 704,
      type: "Signature",
      condition: "Chronic Pain Management",
      image:
        "https://cdn.midjourney.com/ec4680e8-d074-4a69-a24b-3d3f3946907b/0_2.jpeg",
      tag: ["yoga", "camp", "weekend"],
      duration: 10,
      id: "11",
    },
    {
      title: "Yoga for Stress Relief",
      description:
        "A weekend retreat focused on yoga and meditation to relieve stress.",
      date: "2024-09-30",
      location: "Goa",
      price: 200,
      type: "Signature",
      condition: "Stress Relief",
      image:
        "https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg",
      tag: ["relaxation", "meditation", "weekend"],
      duration: 3,
      id: "1",
    },
    {
      title: "Flexibility Improvement Workshop",
      description:
        "A 5-day workshop designed to improve flexibility through yoga.",
      date: "2024-10-20",
      location: "Rishikesh",
      price: 500,
      type: "Standalone",
      condition: "Flexibility Improvement",
      image:
        "https://cdn.midjourney.com/4eef5d57-1601-4b80-8e82-523003e9f95d/0_0.jpeg",
      tag: ["flexibility", "yoga", "workshop"],
      duration: 5,
      id: "2",
    },
  ];
  useEffect(() => {
    const filtered = retreats.filter((retreat) => {
      const [minPrice, maxPrice] = filters.price.split("-").map(Number);
      return (
        (filters.date === "" || retreat.date === filters.date) &&
        (filters.location === "" || retreat.location === filters.location) &&
        (filters.type === "" || retreat.type === filters.type) &&
        (filters.price === "" ||
          (retreat.price >= (minPrice || 0) &&
            retreat.price <= (maxPrice || Infinity))) &&
        (filters.duration === "" || retreat.duration <= filters.duration) &&
        (filters.search === "" ||
          retreat.title.toLowerCase().includes(filters.search.toLowerCase()))
      );
    });
    setFilteredRetreats(filtered);
  }, [filters]);

  const indexOfLastRetreat = currentPage * retreatsPerPage;
  const indexOfFirstRetreat = indexOfLastRetreat - retreatsPerPage;
  const currentRetreats = filteredRetreats.slice(
    indexOfFirstRetreat,
    indexOfLastRetreat
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <Hero />
      <Filter filters={filters} setFilters={setFilters} />
      <div className="retreat-list">
        {currentRetreats.length > 0 ? (
          currentRetreats.map((retreat, index) => (
            <div className="retreat" key={index}>
              <img src={retreat.image} alt={retreat.title} />
              <h3>{retreat.title}</h3>
              <p style={{ fontWeight: "600" }}>
                {" "}
                <span></span>
                {retreat.description}
              </p>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>Date:</span>
                {new Date(retreat.date).toDateString()}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Location: </span>{" "}
                {retreat.location}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Price: </span>$
                {retreat.price}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Duration: </span>{" "}
                {retreat.duration} days
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Type: </span> {retreat.type}
              </p>
            </div>
          ))
        ) : (
          <div className="no-retreats">
            <p>No such wellness retreat found</p>
            <div className="recommended-retreats">
              {retreats.slice(0, 6).map((retreat, index) => (
                <div className="retreat" key={index}>
                  <img src={retreat.image} alt={retreat.title} />
                  <h3>{retreat.title}</h3>
                  <p>{retreat.description}</p>
                  <p>Date: {new Date(retreat.date).toDateString()}</p>
                  <p>Location: {retreat.location}</p>
                  <p>Price: ${retreat.price}</p>
                  <p>Duration: {retreat.duration} days</p>
                  <p>Type: {retreat.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Pagination
        retreatsPerPage={retreatsPerPage}
        totalRetreats={filteredRetreats.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default RetreatList;

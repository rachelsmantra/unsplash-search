import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "15627ce3a8b2f1fb677ac48f190bce0705fce6156f00640a574aa241dd688f8e"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientId;

    axios.get(url).then(response => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <div className="App">
      <h1>Unsplash Photo Search</h1>
      <form
        id="form"
        className="form-group d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="form-group input-container">
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="Search"
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-success btn-lg" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="photo-container">
        {result.map(photo => (
          <img src={photo.urls.small} />
        ))}
      </div>
    </div>
  );
}

export default App;

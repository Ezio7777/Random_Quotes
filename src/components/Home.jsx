import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.data : [];
  const [quotes, setQuotes] = useState("");
  const [savedQuotes, setSavedQuotes] = useState(data);

  const getQuotes = async () => {
    try {
      const response = await fetch(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      console.log(json);
      setQuotes(json[0]); // Assuming the response is an array with a quote string
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSave = () => {
    setSavedQuotes([...savedQuotes, quotes]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "The Quote has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const goSave = () => {
    navigate("/save", {
      state: {
        data: savedQuotes,
      },
    });
  };

  useEffect(() => {
    getQuotes(); // Fetch a quote on component mount
  }, []);

  return (
    <div className="container-fluid home">
      <h1>Random Quotes</h1>
      <div className="quotes_save">
        <button className="saved_quotes btn btn-success" onClick={goSave}>
          Saved Quotes ({savedQuotes.length}) &nbsp;
          <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
      <div className="card">
        <span></span>
        <div className="content container">{quotes}</div>
        <div className="btn_div container">
          <button className="refresh button" onClick={getQuotes}>
            <i className="fa-solid fa-rotate"></i> &nbsp;Regenerate
          </button>
          <button className="save button" onClick={onSave}>
            <i className="fa-solid fa-floppy-disk"></i> &nbsp;Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

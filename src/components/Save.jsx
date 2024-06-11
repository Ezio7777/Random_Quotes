import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Save.css";

const Save = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  const goBack = () => {
    navigate("/", {
      state: {
        data: data,
      },
    });
  };
  return (
    <>
      <div className="container-fluid save_body">
        <div className="go_back">
          <button type="button" class="btn btn-success" onClick={goBack}>
            <i class="fa-solid fa-arrow-left"></i> GO Back
          </button>
        </div>
        {data.length > 0 && (
          <div className="row">
            {data.map((quote, index) => (
              <>
                <div className="col-lg-3 col-md-4 col-sm-12 quote_cell">
                  <div className="cards">
                    <p>{index + 1}</p>
                    <br />
                    <p>{quote}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Save;

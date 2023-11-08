import React, { useState, useEffect } from "react";
import "./DisplayingCode.css";
import ClipLoader from "react-spinners/ClipLoader";

const DisplpayingCode = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const { data } = props;
  return (
    <>
      {loading ? (
        <ClipLoader
          className="spinner"
          color={"black"}
          loading={loading}
          size={50}
        />
      ) : data ? (
        <div className="card-style">
          <span className="sq-right">{"{"}</span>
          <h1>
            "post code" : "
            <span className="green">{props.data["post code"]}</span>"
          </h1>
          <h1>
            "country" : "<span className="green">{props.data.country}</span>"
          </h1>
          <h1>
            "country abbreviation" : "
            <span className="green">{props.data["country abbreviation"]}</span>"
          </h1>
          <h2>"places" : </h2>
          <div className="place-cards">
            <span className="square-brac-left">[</span>
            {props.data.places.map((place: any, index: any) => (
              <div className="place-card" key={index}>
                {"{"}
                <h4 className="card-left">
                  "place name" :{" "}
                  <span className="green">"{place["place name"]}"</span>
                </h4>
                <p className="card-left">
                  "longitude" : "
                  <span className="green">{place.longitude}"</span>
                </p>
                <p className="card-left">
                  "state" : "<span className="green">{place.state}</span>"
                </p>
                <p className="card-left">
                  "state abbreviation" : "
                  <span className="green">{place["state abbreviation"]}</span>"
                </p>
                <p className="card-left">
                  "latitude" : "<span className="green">{place.latitude}</span>"
                </p>
                {"},"}
              </div>
            ))}
          </div>
          <span className="sq-left">]</span>
          <br />
          <span className="sq-right">{"}"}</span>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default DisplpayingCode;

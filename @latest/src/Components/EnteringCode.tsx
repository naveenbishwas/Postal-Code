import { useState } from "react";
import "./EnteringCode.css";
import DisplpayingCode from "./DisplpayingCode";

const EnteringCode = () => {
  const [postal, setPostal] = useState("");
  const [fetchData, setFetchData] = useState(null);

  const postalCode = (event: any) => {
    setPostal(event.target.value);
  };

  const clearHandle = () => {
    setFetchData(null);
  };

  const apiget = (e: any) => {
    e.preventDefault();
    fetch("https://api.zippopotam.us/in/" + postal)
      .then((res) => {
        if (!res.ok) {
          console.error("Network Response was not ok");
          throw new Error("Network Response was not ok");
        }
        return res.json();
      })
      .then((data) => setFetchData(data))
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      <form className="form" action="" onSubmit={apiget}>
        <label htmlFor="">Postal Code</label>
        <input
          type="number"
          name=""
          id="number"
          placeholder="Enter Your Postal Code"
          onChange={postalCode}
        />
        <div className="btns">
          <button type="button" onClick={clearHandle}>
            Clear All
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>

      {fetchData && <DisplpayingCode data={fetchData} />}
    </div>
  );
};

export default EnteringCode;

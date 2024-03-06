import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //getRequest
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //postRequest - String
  const data = "hello this is data sent from frontend to backend";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/postcall", {
      data,
    });

    console.log(response.data);
    document.getElementById("para1").innerHTML = response.data;
  };
  //postRequest - form
  const [songName, setSongName] = useState("");
  const postFormFromFrontend = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/testform", {
      songName,
    });

    console.log(response.data);
    document.getElementById("para2").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <br></br>
      <br></br>

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para1"></p>
      <br></br>
      <br></br>

      <form onSubmit={postFormFromFrontend}>
        <label>Song Name:</label>
        <input
          type="text"
          name="songName"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        ></input>
        <input type="submit" value="testForm"></input>
        <p id="para2"></p>
      </form>
    </div>
  );
};

export default App;

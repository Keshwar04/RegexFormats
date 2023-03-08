import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [datas, setData] = useState("");
  const [error, setError] = useState();

  const getData = () => {
    let regexName = /^([a-z0-9]{5,})+$/;
    let regexEmail = /^([A-Za-z0-9$])+\@([a-z])+\.([a-z])+$/;
    let regexPassword = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#]).{5,})+$/;
    let regexMobNo = /^([0-9)]{10})+$/;
    if (!datas) {
      alert("please enter email");
    } else if (!regexEmail.test(datas)) {
      alert("plase enter valid email format");
    } else {
      alert("succes");
    }
  };

  return (
    <div className="App">
      <input onChange={(e) => setData(e.target.value)} />
      <button onClick={getData}>click</button>
      <div>{error}</div>
    </div>
  );
}

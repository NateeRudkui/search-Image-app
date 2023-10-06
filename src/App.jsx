import "./App.css";
import { useState } from "react";
import Picture from "./compronents/Picture";

function App() {
  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อมชื่อรูปที่ต้องการค้นหา");
    } else {
      fetchImageFromAPI();
    }
  }

  async function fetchImageFromAPI() {
    const url = `${
      import.meta.env.VITE_API_URL
    }?page=1&query=${word}&client_id=${
      import.meta.env.VITE_API_KEY
    }&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    console.log(data);
    if (results.length == 0) {
      alert("ไม่มีรูปที่ท่านค้นหา");
      setWord("");
    } else {
      setPhotos(results);
      console.log(results);
    }
  }
  return (
    <>
      <h1>ระบบค้นหารูปภาพ</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="ป้อนชื่อรูปภาพที่ต้องการค้นหา"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">ค้นหา</button>
      </form>
      <div className="search-result">
        {photos.map((data, index) => {
          return <Picture {...data} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;

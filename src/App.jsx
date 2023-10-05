import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const key = "8CSGyz5ewq1-Z-ULHaZNt2DWzBAClajg9g0t1w1t_-s";

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อมชื่อรูปที่ต้องการค้นหา");
    } else {
      fetchImageFromAPI();
    }
  }

  async function fetchImageFromAPI() {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${key}&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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
    </>
  );
}

export default App;

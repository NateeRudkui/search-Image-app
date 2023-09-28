import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อมชื่อรูปที่ต้องการค้นหา");
    } else {
      console.log(word);
    }
  }
  return (
    <>
      <h1>ระบบค้นหารูปภาพ</h1>
      <form onChange={searchImage}>
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

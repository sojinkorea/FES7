import React, { useState } from "react";
import ImageList from "./components/ImageList";

export default function App2() {
  const [imageList, setImageList] = useState([]);

  async function fetchImages() {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=6");

      if (!response.ok) {
        throw new Error("네트워크에 문제가 발생했습니다!");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchImages();

  return <ImageList imageList={imageList} />;
}

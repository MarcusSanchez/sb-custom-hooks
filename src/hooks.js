import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(state = true) {
  const [isFlipped, setIsFlipped] = useState(state);
  const toggle = () => setIsFlipped(!isFlipped);
  return [isFlipped, toggle];
}

function useAxios() {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (baseUrl, restOfUrl = "") => {
    try {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses((data) => [...data, response.data.cards[0]]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

export { useFlip, useAxios };

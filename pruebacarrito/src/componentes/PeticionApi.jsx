// ./hooks/usePeticionApi.js
import { useEffect, useState } from "react";

const URL = "https://api.escuelajs.co/api/v1/products";

export function usePeticionApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return products;
}

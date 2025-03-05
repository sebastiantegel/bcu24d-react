import axios from "axios";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const getData = async () => {
      // const response = await fetch(
      //   "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
      // );
      // const data = await response.json();
      const response = await axios.get(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
      );
      setProducts(response.data);
      setHasFetched(true);
    };

    getData();
  });

  return (
    <div className="products">
      {products.map((p) => {
        return (
          <div key={p.id} className="product">
            <h2>{p.name}</h2>
            <div>
              <img src={p.imageUrl} alt={p.name} />
            </div>
            <p>{p.price}</p>
          </div>
        );
      })}
    </div>
  );
};

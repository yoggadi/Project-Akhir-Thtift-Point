import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>Harga: {product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-600">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

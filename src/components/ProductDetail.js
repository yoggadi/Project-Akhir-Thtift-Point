import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((item) => item.id === parseInt(id))));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-semibold">Harga: {product.price}</p>
    </div>
  );
}

export default ProductDetail;

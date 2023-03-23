import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();
  return <div>ProductDetail</div>;
}

export default ProductDetail;

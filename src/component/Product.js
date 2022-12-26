import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [productID, setProductID] = useState("");
  const navigate = useNavigate();

  const clickHandler = (e) => {
    setProductID(e.target.value);
  };

  useEffect(() => {
    navigate(`/product/${productID}`);
  }, [productID]);

  return (
    <>
      <button onClick={clickHandler} value="p001">
        1번제품
      </button>
      <button onClick={clickHandler} value="p002">
        2번제품
      </button>
      <button onClick={clickHandler} value="p003">
        3번제품
      </button>
    </>
  );
};

export default Product;

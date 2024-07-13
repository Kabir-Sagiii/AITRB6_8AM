import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
  let { id, x } = useParams(); //parameters = {id:20,x:35.55}

  let productData = useSelector((storedata) => {
    console.log(storedata);
    return storedata.products.filter((product) => product.id == id);
  });
  useEffect(() => {
    console.log(productData);
  }, []);
  return (
    <div>
      <h2>ProductDetails : {x}</h2>
      <img src={productData[0].image} width={500} height={300} />
    </div>
  );
}

export default ProductDetails;

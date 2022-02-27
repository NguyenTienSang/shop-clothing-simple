import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
function DisplayProduct() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [products, setProducts] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  return (

    <div>
      {categories.map((category, index) => {
        if (index < 3) {
          return (
            <div>
              <div className="title">
                <h4>{category.name}</h4>
              </div>
              <div className="products">
                {products.map((product) => {
                  console.log(product.category);
                  return (
                    <ProductItem
                      key={product._id}
                      product={product}
                      isAdmin={isAdmin}
                    />
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>

    // <div>
    //   {categories.map((category) => (
    //     <div className="row" key={category._id}>
    //       <p>{category.name}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default DisplayProduct;

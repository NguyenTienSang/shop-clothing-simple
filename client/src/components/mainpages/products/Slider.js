import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

function slider() {
  return (
    <div className="layout">
      <div className="layout-first">
        <div className="category">
          <div className="item">
            <i class="fas fa-bars"></i>Danh mục sản phẩm
          </div>
          <div className="item">Quần áo nam</div>
          <div className="item">Quần áo nữ</div>
        </div>
      </div>
      <div className="layout-second">
        <div className="slider">
          <OwlCarousel
            className={"owl-theme owl_sliderbanner"}
            items="1"
            autoPlay
            nav="false"
            dots={false}
            loop
          >
            <div className="item">
              <img src="https://res.cloudinary.com/ntsit1999/image/upload/v1626860482/ecommerce/girl4_ylx7km.jpg"></img>
            </div>
            <div className="item">
              <img src="https://res.cloudinary.com/ntsit1999/image/upload/v1626860482/ecommerce/man1_sodi2g.jpg"></img>
            </div>
            <div className="item">
              <img src="https://res.cloudinary.com/ntsit1999/image/upload/v1627531293/ecommerce/family1_nyovku.jpg"></img>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default slider;

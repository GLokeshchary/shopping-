import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./HomePage.css";
import { FreeMode } from "swiper";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import WishListProduct from "../Product/WishListProduct";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductPageDisplay from "../ProductPageDisplay.js/ProductPageDisplay";
const imgLinks = [
  "	https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common--1--1679589054.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-revmped-theultimatejoggers-1679389276.jpg",
  "	https://images.bewakoof.com/uploads/grid/app/spring-common-1679655767.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-Back-printed-t-shirts-common3-1678991449.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-pyjamas-common-without-unit-1680082178.jpg",
  "https://images.bewakoof.com/uploads/grid/app/1x1-airy-sleeveless-vests-1679846245.jpg",
  "https://images.bewakoof.com/uploads/grid/app/static-1x1-NoFadeTee-Common-V3-1679941555.jpg",
];
function HomePage() {
  const products= useLoaderData();
  return (
    <>
      <div className="slide-container">
        <Swiper
          // install Swiper modules
          modules={[
            Autoplay,
            FreeMode,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
          ]}
          spaceBetween={10}
          rewind={true}
          slidesPerView={3}
          navigation
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          keyboard={true}
          loop={true}
          grabCursor={true}
          className="product-img"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {imgLinks.map((link) => (
            <SwiperSlide key={link}>
              <div className="image-wrapper">
                <img className="img" src={link} alt={link.length} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="returnImg">
        <img src="https://images.bewakoof.com/uploads/grid/app/global-shipping-strip-1678787645.jpg" alt="return" />
      </div>
      <div>
        <BreadCrumbs/>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <WishListProduct product={product} key={product.id} />
        ))}
      </div>
      <div className="productdisplayPage">
        <ProductPageDisplay/>
      </div>
    </>
  );
}

export default HomePage;
export const productsLoader = async () => {
  const response = await fetch("http://localhost:8080/products");

  if(!response.ok){
    throw Error('Could not Find that Products')
  }

  return response.json();
};

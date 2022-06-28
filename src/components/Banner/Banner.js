import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import { bannerURL } from "../../Url/Url";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
   const [bannerData, setBannerData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const res = await axios.get(bannerURL);
         setBannerData(res.data);
      };
      fetchData();
   }, []);

   return (
    <div className="banner_box banner_box_shadow">
       <Carousel 
        ariaLabel="banners"
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        swipeable={true}
     >
       {
        bannerData.map(item => (
            <div className="banner_img_container" key = {item.id}>
                <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
            </div>
        ))
       }
     </Carousel>
    </div>
    );
}

export default Banner;
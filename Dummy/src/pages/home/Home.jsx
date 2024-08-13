import React from "react";
import Header from "./header/Header";
import MyCarousel from "./carousel/Carousel";
import Section2 from "./homesection2/Section2";
import Section3 from "./homesection3/Section3";
import Section4 from "./homesection4/Section4";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <Section2 />
      <Section3
        image="https://jamaicaclassifiedonline.com/images/2019/02/16/65510/apple-macbook-pro-133-l3t8wgiu_1.jpg"
        width="500"
        title="Macbook Pro"
      />
      <Section4 />
      <Section3
        image="https://th.bing.com/th/id/R.eda3e0ab57e5eb008b52bb5686e94f66?rik=zA40Ky6byOuj6g&riu=http%3a%2f%2fcdn.shopclues.net%2fimages%2fdetailed%2f7294%2fPhilipsQT4011TrimmerSDL0891561651a18d3_1410852930.jpg&ehk=QdUGJ8Bkh5ETTWYLnyPj93E3MQ0u5wDnPPulHNBYPMA%3d&risl=&pid=ImgRaw&r=0"
        title="Trimmer"
      />
      <Footer />
    </div>
  );
}

export default Home;

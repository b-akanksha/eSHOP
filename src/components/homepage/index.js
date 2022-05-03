import React from "react";
import Card from "../card";
import "./homepage.css";

const HomePage = () => {
  const dummydata = [
    {
      img: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UL480_QL65_.jpg",
      title:
        "Redmi Note 11 (Horizon Blue, 4GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm",
      price: 799,
      originalPrice: 999,
      discount: 23,
      rating: 1,
    },
    {
      img: "https://m.media-amazon.com/images/I/810KHyQ4WcL._AC_UL480_QL65_.jpg",
      title:
        "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
      price: 599,
      originalPrice: 699,
      discount: 10,
      rating: 2,
    },
    {
      img: "https://m.media-amazon.com/images/I/71WC+Qz1KgL._AC_UL480_QL65_.jpg",
      title: "Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage)",
      price: 899,
      originalPrice: 999,
      discount: 10,
      rating: 3,
    },
    {
      img: "https://m.media-amazon.com/images/I/71Iq9ug6OvL._SX679_.jpg",
      title:
        "Redmi Note 11 (Starburst White, 4GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm",
      price: 799,
      originalPrice: 999,
      discount: 23,
      rating: 4,
    },
    {
      img: "https://m.media-amazon.com/images/I/81T4O-rEI+L._AC_UL480_QL65_.jpg",
      title:
        "Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
      price: 599,
      originalPrice: 699,
      discount: 10,
      rating: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/71293gyogZL._AC_UL480_QL65_.jpg",
      title: "Redmi 10A (Charcoal Blue, 4GB RAM, 64GB Storage)",
      price: 899,
      originalPrice: 999,
      discount: 10,
      rating: 3,
    },
  ];

  return (
    <div className="home">
      {dummydata &&
        dummydata.length > 0 &&
        dummydata.map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            img={item.img}
            title={item.title}
            price={item.price}
            originalPrice={item.originalPrice}
            discount={item.discount}
            rating={item.rating}
          />
        ))}
    </div>
  );
};

export default HomePage;

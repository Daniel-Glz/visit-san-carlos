import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import BannerTwo from "@/components/BannerTwo/BannerTwo";
import TourTypes from "@/components/TourTypes/TourTypes";
import CounterOne from "@/components/CounterOne/CounterOne";
import DestinationsTwo from "@/components/DestinationsTwo/DestinationsTwo";

const Home = () => {
  return (
    <Layout pageTitle="Home Two">
      <BannerTwo />
      <ThreeIconBox />
      <AboutOne />
      <PopularTours />
      <TourTypes />
      <VideoTwo />
      <CounterOne />
      <DestinationsTwo />
      <NewsOne />
      <TestimonialOne />
    </Layout>
  );
};

export default Home;

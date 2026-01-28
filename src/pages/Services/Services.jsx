import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import serviceImage from "../../assets/gallery/service.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  FaDumbbell,
  FaHeartbeat,
  FaICursor,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import MainButton from "../../components/Buttons/MainButton";
import SubHead from "../../components/Heading/SubHead";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import SectionHead from "../../components/Heading/SectionHead";
const Services = () => {
  return (
    <div>
      <PageHeading content="Services" />
      {/* Services */}
      <div className="bg-fixed bg-cover bg-center pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Push Your Limits Forward We Offer To You "
            ></SectionHead>
            {/* <div className="lg:w-3/12">
              <Button>
                <Link to="/contact" className="md:px-2">
                  Become A Member
                </Link>
              </Button>{" "}
            </div> */}
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="Gymnasium"
            description="State-of-the-art fitness equipment and facilities designed to help you achieve your fitness goals with professional guidance."
            path="/services"
            content="Discover more About us"
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-music"
            title="Dance Studio"
            description="Professional dance classes and studio space for various dance forms to enhance your fitness and coordination."
            path="/services"
            content="Discover more About us"
            image="https://images.unsplash.com/photo-1546027658371-ded94e9029a5?w=500&h=500&fit=crop"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-utensils"
            title="Diet Cafe"
            description="Nutritious meal options and dietary guidance to complement your fitness journey and health goals."
            path="/services"
            content="Discover more About us"
            image="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop"
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Services;

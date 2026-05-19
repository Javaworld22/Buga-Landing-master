import {  TestimonialCardProps } from '@/types/type';
import React from 'react'
import { Heading } from '../ui/heading';
import {TestimonialCard} from "../ui/TestimonialCard";

const testimonials: TestimonialCardProps[] = [
  {
    rating: 5,
    testimonial:
      "I was skeptical at first, but after winning my first jackpot of ₦250,000, I'm a believer! The money was in my account within minutes. This platform is truly revolutionary.",
    name: "Oluwaseun Adebayo",
    location: "Lagos, Nigeria",
  },
  {
    rating: 4,
    testimonial:
      "Great experience overall, very user-friendly interface and quick payouts. Customer support is also responsive and helpful.",
    name: "Kemi Johnson",
    location: "Abuja, Nigeria",
  },
  {
    rating: 5,
    testimonial:
      "I've referred five friends already and earned bonus coins each time. The referral system is generous and my friends are enjoying the platform too. Customer service is top-notch!",
    name: "Kwame Osei",
    location: "Accra, Ghana",
  },
];
  

export const WhatOurWinnerSay = () => {
  return (
    <section
      id="trusted"
      className="w-full md:px-[12.5%] mx-auto sm:px-6 mt-20"
    >
      <Heading
        title="What Our Winners Say"
        description="Real stories from real winners who have experienced the thrill of winning with our platform."
      />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 place-items-center cards">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            location={testimonial.location}
          />
        ))}
      </div>
    </section>
  );
}

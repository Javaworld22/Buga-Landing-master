import { Heading } from "../ui/heading";
import SupportCard from "../ui/support-card";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../ui/contact-form";
import OfficeCard from "../ui/office-card";

export const Support = () => {
  const handleLiveChat = () => {
    console.log("Starting live chat...");
    // Add your chat integration here
  };

  const handleEmail = () => {
    console.log("Opening email...");
    // Add email functionality here
    window.location.href = "mailto:support@example.com";
  };

  const handlePhone = () => {
    console.log("Initiating phone call...");
    // Add phone functionality here
    window.location.href = "tel:+1234567890";
  };

  return (
    <section
      id="support"
      className="py-12 w-full md:px-[12.5%] mx-auto sm:px-6"
    >
      <Heading
        title="Contact Support"
        description="We're here to help! Choose your preferred method of contact or fill out the form below."
      />

      {/* 3x3 CSS Grid Layout */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 cards">
          {/* First Row - 3 Support Cards */}
          <div className="md:col-span-1">
            <SupportCard
              icon={MessageCircle}
              title="Live Chat"
              description="Chat with our support team in real-time for immediate assistance."
              availabilityText="Available: 8am - 10pm WAT, Monday-Saturday"
              responseTimeText="Average response time: 2 minutes"
              buttonText="Start Chat"
              onButtonClick={handleLiveChat}
              cardBgColor="bg-[#FFFFFF]"
              className="shadow-sm h-full"
            />
          </div>

          <div className="md:col-span-1">
            <SupportCard
              icon={Mail}
              title="Email Support"
              description="Send us an email and we'll get back to you with detailed assistance."
              availabilityText="Available: 24/7"
              responseTimeText="Average response time: 4 hours"
              buttonText="Send Email"
              onButtonClick={handleEmail}
              buttonHoverColor="hover:bg-blue-600"
              cardBgColor="bg-[#FFFFFF]"
              className="shadow-sm h-full"
            />
          </div>

          <div className="md:col-span-1">
            <SupportCard
              icon={Phone}
              title="Phone Support"
              description="Call our dedicated support line to speak with a representative."
              availabilityText="Available: 9am - 6pm WAT, Monday-Friday"
              responseTimeText="Average wait time: 5 minutes"
              buttonText="Call Now"
              onButtonClick={handlePhone}
              cardBgColor="bg-[#FFFFFF]"
              className="shadow-sm h-full"
            />
          </div>

          {/* Second Row - Contact Form (2 columns) + Office Info (1 column) */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          <div className="md:col-span-1">
            <OfficeInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

// Office Info Component
const OfficeInfo = () => {
  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-green mb-8 font-playfair">
        Our Office
      </h2>

      <div className="space-y-8">
        <OfficeCard
          address="No 11 Enitan Street Aguda Surulere, Lagos"
          phone="09062030311 | 08050881111 | 08057001111 | 08055102222"
          state="Lagos, Nigeria"
        />
      </div>
    </div>
  );
};

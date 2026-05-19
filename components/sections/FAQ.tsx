import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ArrowRight, CirclePlus } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "How do I know if I've won?",
    answer:
      "You'll receive an immediate notification on your dashboard and via email when you win. Winners are also announced publicly on our platform. You can check your account status anytime in the 'My Entries' section.",
  },
  {
    id: "item-2",
    question: "Is the platform legal and regulated?",
    answer:
      "Yes, our platform is fully licensed and regulated by the appropriate gaming authorities. We comply with all local and international regulations, ensuring fair play and secure transactions for all users.",
  },
  {
    id: "item-3",
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and various digital wallets. All transactions are secured with industry-standard encryption.",
  },
  {
    id: "item-4",
    question: "How does the referral program work?",
    answer:
      "Invite friends using your unique referral link. When they make their first purchase, you both receive bonus credits. The more friends you refer, the more rewards you earn. Check your referral dashboard for detailed tracking.",
  },
  {
    id: "item-5",
    question: "What happens if there's a technical issue during a draw?",
    answer:
      "In the rare event of technical difficulties, the draw will be postponed and rescheduled. All participants will be notified immediately, and your entries remain valid for the new draw time. Our technical team monitors all draws in real-time.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-[#FFFFFF] w-full md:px-[12.5%] mx-auto sm:px-6"
    >
      <div className="text-center mb-1 md:pt-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
          <span className="text-orange-500">Buga</span> Frequently Asked
          Questions
        </h2>
        <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-roboto font-normal">
          Find answers to the most common questions about our platform.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {/* FAQ Accordion - Clean minimal design */}
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-gray-200 py-4"
              >
                <AccordionTrigger className="flex justify-between items-center w-full text-left hover:no-underline py-0 font-bold text-[#1F2937] font-playfair text-2xl group">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <CirclePlus className="h-6 w-6 text-orange-500 transition-transform duration-200 group-data-[state=open]:rotate-45 flex-shrink-0" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-3 text-base leading-relaxed overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="pt-8 md:pb-40">
            <button className="flex items-center text-[#1C5D3E] hover:text-gray-900 font-semibold text-base group font-roboto">
              Contact Support for More Questions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

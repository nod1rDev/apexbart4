import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
// Utility function for class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Accordion Components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-[#f9f4e8]/10", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-lg font-medium transition-all hover:text-red-500 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export default function ImprovedFAQSection() {
  return (
    <div className=" w-full bg-[#1f1f1f] text-[#f9f4e8] py-[120px]  px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-4 md:sticky md:top-[80px]">
            <p className="text-red-500 font-medium text-lg md:text-xl uppercase tracking-wide">
              FAQs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="text-[#f9f4e8]/70 text-lg md:text-xl max-w-md">
              Find answers to common questions about our services and how we can
              help your business grow.
            </p>
          </div>

          <div
           
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#333333]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-[#f9f4e8]/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "What CRM do you use?",
    answer:
      "We integrate with various CRM systems including Salesforce, HubSpot, and others. Our platform is designed to be CRM-agnostic and can work with most modern CRM solutions.",
  },
  {
    question: "What outcomes can I expect?",
    answer:
      "Our clients typically see improved efficiency in their sales processes, better lead qualification, and increased conversion rates. Specific outcomes vary based on your implementation and use case.",
  },
  {
    question: "Can I run email marketing out of the CRM?",
    answer:
      "Yes, our platform integrates with your CRM's email marketing capabilities, allowing you to run and automate email campaigns directly through your existing CRM system.",
  },
  {
    question: "Do you help with migrations?",
    answer:
      "Yes, we provide comprehensive migration support to ensure a smooth transition. Our team will help you migrate your existing data and processes to the new system.",
  },
  {
    question: "How does the AI work and what is Axe Automation?",
    answer:
      "Our AI system uses advanced machine learning algorithms to automate and optimize your sales processes. Axe Automation is our proprietary automation platform that handles routine tasks and provides intelligent insights.",
  },
];

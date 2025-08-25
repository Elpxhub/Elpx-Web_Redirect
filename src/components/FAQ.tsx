import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I donate in other ways?",
      answer: "Yes, we accept various forms of donations including bank transfers, mobile money, and cryptocurrency. Contact our support team to learn about all available options."
    },
    {
      question: "How will my donation be used?",
      answer: "Your donations go directly to verified campaigns with full transparency. We provide regular updates and detailed reports showing exactly how your contribution makes an impact."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations through our platform are tax-deductible. We'll provide you with the necessary documentation for your tax records."
    },
    {
      question: "Are there different donation tiers?",
      answer: "We offer flexible donation options from one-time contributions to recurring monthly donations. You can choose any amount that works for your budget."
    },
    {
      question: "How can I stay updated on progress?",
      answer: "You'll receive regular email updates about the campaigns you support, including progress reports, photos, and stories from beneficiaries."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Got Questions?
            <br />
            We've Got <span className="text-primary">Answers</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} className="border border-primary rounded-md px-3 mb-2" value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
import { faqs } from "@/data/portfolio";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-sand/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              [ 06 ] FAQ
            </p>
            <h2 className="sr-only">Frequently Asked Questions about Ankit Mishra</h2>
            <p aria-hidden="true" className="font-display text-5xl md:text-6xl leading-[0.95]">
              Common
              <br />
              <em className="text-coral not-italic">questions.</em>
            </p>
            <p className="mt-6 max-w-sm text-muted-foreground">
              A quick rundown of who I am, what I build and how to work with me.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="font-display text-lg md:text-xl py-6 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

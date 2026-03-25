import { faqItems } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Questions"
          title="Clear the last objections before the CTA."
          description="These are the questions most likely to slow the decision down. The goal is to make the next step feel clearer, not heavier."
        />

        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <article key={item.question} className="panel rounded-[1.5rem] p-6">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

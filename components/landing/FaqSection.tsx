import { faqItems } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Handle the last objections before the CTA."
          description="These answers are here to make fit, scope, price entry, and offer clarity easier to evaluate before you start the guided path."
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

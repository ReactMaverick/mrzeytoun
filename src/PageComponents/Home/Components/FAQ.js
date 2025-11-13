import Accordion from "@/Components/Accordion/Accordion";
import React from "react";

const FAQ = () => {
  return (
    <section>
      <div className="custom-container py-[50px] space-y-[25px]">
        <h2 className="font-varsity font-bold text-center">
          Frequently Asked Questions (FAQ)?
        </h2>

        {/* Faqs  */}
          <Accordion />
      </div>
    </section>
  );
};

export default FAQ;

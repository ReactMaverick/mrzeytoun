import Accordion from "@/Components/Accordion/Accordion";
import React from "react";

const FAQ = () => {
  return (
    <section>
      <div className="custom-container">
        <h2 className="font-varsity py-[50px] font-bold text-center">
          Frequently Asked Questions (FAQ)?
        </h2>

        {/* Faqs  */}
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

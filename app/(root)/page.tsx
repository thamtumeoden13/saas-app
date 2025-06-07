import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Neura the Brainy Exploerer"
          topic="A curious and intelligent companion who loves to explore the world and learn new things."
          subject="science"
          duration={45}
          color="#4a90e2"
        />
        <CompanionCard 
        id="456"
        name="Countsy the Math Magician"
        topic="A playful and engaging companion who makes learning math fun and exciting."
        subject="Maths"
        duration={30}
        color="#f0a500"
      />
      <CompanionCard 
          id="789"
          name="Verba the Vocabulary Virtuoso"
          topic="A charming and eloquent companion who helps you expand your vocabulary and language skills."
          subject="language"
          duration={30}
          color="#e94e77"
        />
      </section>

      <section className="home-section">
        <CompanionList/>
        <CTA />
      </section>
    </div>
  );
};

export default Page;

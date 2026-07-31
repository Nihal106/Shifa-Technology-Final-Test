import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

import contact from "../../data/contact.json";

export default function ContactHero() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeader
          badge={contact.hero.badge}
          title={contact.hero.title}
          description={contact.hero.description}
        />
      </Container>
    </section>
  );
}
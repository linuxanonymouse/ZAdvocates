import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const practiceAreas = [
  {
    name: 'Corporate Law',
    slug: 'corporate-law',
    description: 'Guiding businesses through formation, governance, and complex transactions.',
    content: 'Our Corporate Law practice provides comprehensive legal counsel for businesses of all sizes. From entity formation and corporate governance to mergers, acquisitions, and joint ventures, we help clients navigate complex commercial transactions with confidence.\n\nWe advise boards of directors, executive teams, and shareholders on fiduciary duties, compliance matters, and strategic business decisions. Our team has extensive experience structuring deals, drafting agreements, and resolving corporate disputes.',
    iconUrl: 'ph ph-bank',
  },
  {
    name: 'International Arbitration',
    slug: 'international-arbitration',
    description: 'Resolving disputes efficiently through confidential and enforceable arbitration.',
    content: 'Our International Arbitration team represents clients in complex cross-border disputes before major arbitral institutions including ICC, LCIA, and ICSID. We provide strategic counsel from the drafting of arbitration clauses through to enforcement of awards.\n\nWith deep experience in commercial, investment, and construction arbitration, we help clients achieve efficient, confidential, and enforceable resolutions to their most challenging disputes.',
    iconUrl: 'ph ph-globe',
  },
  {
    name: 'Intellectual Property',
    slug: 'intellectual-property',
    description: 'Protecting innovations, brands, and creative assets worldwide.',
    content: 'We help clients protect, enforce, and commercialize their intellectual property assets globally. Our IP practice covers patents, trademarks, copyrights, trade secrets, and licensing agreements.\n\nWhether you are a startup launching a new product or an established enterprise managing a global IP portfolio, we provide strategic advice tailored to your business objectives.',
    iconUrl: 'ph ph-shield',
  },
  {
    name: 'Litigation & Dispute Resolution',
    slug: 'litigation',
    description: 'Aggressive representation in court and alternative dispute resolution.',
    content: 'When disputes cannot be avoided, our Litigation team provides skilled and determined representation in courts and tribunals at every level. We handle commercial litigation, class actions, regulatory enforcement, and appellate matters.\n\nWe combine thorough preparation with creative advocacy to achieve the best possible outcomes for our clients, whether through trial, settlement, or alternative dispute resolution.',
    iconUrl: 'ph ph-gavel',
  },
  {
    name: 'Compliance & Regulatory',
    slug: 'compliance',
    description: 'Helping organizations navigate complex regulations and mitigate risk.',
    content: 'Our Compliance & Regulatory practice helps organizations navigate an increasingly complex regulatory landscape. We advise on anti-corruption, data privacy, financial regulations, and industry-specific compliance requirements.\n\nWe work with clients to develop robust compliance programs, conduct internal investigations, and respond to regulatory inquiries and enforcement actions.',
    iconUrl: 'ph ph-file-text',
  },
];

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'admin@zadvocates.com' },
    update: {},
    create: {
      email: 'admin@zadvocates.com',
      password,
      name: 'Admin',
    },
  });

  for (const area of practiceAreas) {
    await prisma.practiceArea.upsert({
      where: { slug: area.slug },
      update: {
        name: area.name,
        description: area.description,
        content: area.content,
        iconUrl: area.iconUrl,
      },
      create: area,
    });
  }

  console.log({ user, practiceAreas: practiceAreas.length });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

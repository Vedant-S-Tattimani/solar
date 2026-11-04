export interface System {
  id: string;
  slug: string;
  number: number;
  name: string;
  tagline: string;
  slogan: string;
  description: string;
  image: string;
  alt: string;
  idealFor: string;
  system: string;
  backup: string;
  installation: string;
  priceFrom: string;
  financing: string;
  isPopular?: boolean;
  popularBadge?: string;
  tintColor: string;
  prevSlug?: string | null;
  prevName?: string | null;
  nextSlug?: string | null;
  nextName?: string | null;
}

export const systems: System[] = [
  {
    id: 'backup-essentials',
    slug: 'backup-essentials',
    number: 1,
    name: 'Backup Essentials',
    tagline: 'Battery only · installed in 1 day',
    slogan: 'Keep the lights, fridge and Wi‑Fi on when the grid goes down.',
    description:
      'A wall-mounted home battery with a smart gateway that switches over in milliseconds. No panels needed — it charges from the grid and stands guard for the moments that matter.',
    image: '/images/system-backup-essentials.png',
    alt: 'Backup Essentials — solar and battery system',
    idealFor: 'Homes without solar, areas with frequent outages',
    system: '13.5 kWh battery + smart gateway',
    backup: 'Essentials for ~24 hours',
    installation: '1 day',
    priceFrom: '$11,900',
    financing: 'or from $99/mo',
    tintColor: '#a0b1b8',
    prevSlug: null,
    prevName: null,
    nextSlug: 'solar-starter',
    nextName: 'Solar Starter',
  },
  {
    id: 'solar-starter',
    slug: 'solar-starter',
    number: 2,
    name: 'Solar Starter',
    tagline: 'Grid-tied solar · battery-ready',
    slogan: 'Cut your electric bill with clean power from your own roof.',
    description:
      'High-efficiency panels with microinverters and live app monitoring. Sized to your real usage and pre-wired, so a battery can be added later in a single visit.',
    image: '/images/system-solar-starter.png',
    alt: 'Solar Starter — solar and battery system',
    idealFor: 'Lower bills on a sunny roof',
    system: '6–8 kW panels + microinverters',
    backup: 'Add a battery anytime',
    installation: '1–2 days',
    priceFrom: '$14,500',
    financing: 'or from $109/mo',
    tintColor: '#d9ceb6',
    prevSlug: 'backup-essentials',
    prevName: 'Backup Essentials',
    nextSlug: 'solar-storage',
    nextName: 'Solar + Storage',
  },
  {
    id: 'solar-storage',
    slug: 'solar-storage',
    number: 3,
    name: 'Solar + Storage',
    tagline: 'Panels + battery · outage-ready',
    slogan: 'Daytime sunshine, evening comfort, calm through every outage.',
    description:
      'Our most-loved system. Panels charge your battery by day, your home runs on stored sunshine at night, and the essentials stay on automatically when the grid fails.',
    image: '/images/system-solar-storage.png',
    alt: 'Solar + Storage — solar and battery system',
    idealFor: 'Families who want savings and security',
    system: '8–10 kW panels + 13.5 kWh battery',
    backup: 'Essentials for 1–2 days',
    installation: '2 days',
    priceFrom: '$27,900',
    financing: 'or from $189/mo',
    isPopular: true,
    popularBadge: 'Most popular',
    tintColor: '#f16b46',
    prevSlug: 'solar-starter',
    prevName: 'Solar Starter',
    nextSlug: 'whole-home-independence',
    nextName: 'Whole-Home Independence',
  },
  {
    id: 'whole-home-independence',
    slug: 'whole-home-independence',
    number: 4,
    name: 'Whole-Home Independence',
    tagline: 'Whole-home backup · EV-ready',
    slogan: 'Run everything — heating, cooling, EV and induction — through any outage.',
    description:
      'A larger array, two or three batteries and a smart panel that balances every circuit. Life carries on exactly as normal, and your car charges on sunshine.',
    image: '/images/system-whole-home.png',
    alt: 'Whole-Home Independence — solar and battery system',
    idealFor: 'Larger homes, EV drivers, home offices',
    system: '12–16 kW panels + 27–40 kWh storage + EV charger',
    backup: 'Whole home for 2–3 days',
    installation: '2–3 days',
    priceFrom: '$44,900',
    financing: 'or from $299/mo',
    tintColor: '#819993',
    prevSlug: 'solar-storage',
    prevName: 'Solar + Storage',
    nextSlug: 'off-grid-estate',
    nextName: 'Off-Grid Estate',
  },
  {
    id: 'off-grid-estate',
    slug: 'off-grid-estate',
    number: 5,
    name: 'Off-Grid Estate',
    tagline: 'Fully autonomous · engineered on site',
    slogan: 'Complete energy independence for rural and remote homes.',
    description:
      'A fully self-sufficient power system engineered around your land: a large array, deep storage and automatic generator backup for long winter weeks. No utility bills, ever.',
    image: '/images/system-off-grid.png',
    alt: 'Off-Grid Estate — solar and battery system',
    idealFor: 'Rural properties, cabins, remote estates',
    system: '20+ kW panels + 40–80 kWh storage + generator',
    backup: 'Unlimited — no grid needed',
    installation: '1–2 weeks',
    priceFrom: '$74,000',
    financing: 'Custom financing',
    tintColor: '#ad8a86',
    prevSlug: 'whole-home-independence',
    prevName: 'Whole-Home Independence',
    nextSlug: null,
    nextName: null,
  },
];

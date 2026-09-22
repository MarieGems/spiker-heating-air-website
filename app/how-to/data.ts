// Tier 3 programmatic local-intent pages. Every factual HVAC claim here is
// well-established, generally-known HVAC knowledge (dirty filters restrict
// airflow, a dirty flame sensor causes short-cycling, etc.) — nothing about
// Spiker specifically beyond components/brand.ts, and no stat/study cited
// except the one EPA indoor-air figure already used site-wide.

export type HowToSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type HowToPage = {
  slug: string
  keyword: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  sections: HowToSection[]
  relatedSlugs: string[]
}

export const HOW_TO_PAGES: HowToPage[] = [
  {
    slug: 'ac-repair-wichita-ks',
    keyword: 'ac repair wichita ks',
    metaTitle: 'AC Repair in Wichita, KS: Signs & Common Causes',
    metaDescription:
      'What actually causes AC problems in Wichita summers, the warning signs to watch for, and what a repair visit looks like.',
    eyebrow: 'AC Repair Guide',
    h1: 'AC Repair in Wichita, KS: Signs, Causes, and What to Expect',
    intro:
      "Wichita summers push air conditioners hard, and a system that's already a little worn tends to show it on the hottest days rather than the mild ones. Here's what typically goes wrong, and what a repair visit actually involves.",
    sections: [
      {
        heading: 'Signs your AC needs a look',
        bullets: [
          'Air coming from the vents that’s warm or barely cool',
          'Weak airflow even with the fan running',
          'The system turning on and off more often than usual (short cycling)',
          'Ice building up on the outdoor unit or an indoor line',
          'Grinding, squealing, or banging noises',
          'Rooms staying humid even while the AC runs',
          'A jump in your electric bill with no change in how you’re using the system',
        ],
      },
      {
        heading: 'What usually causes it',
        paragraphs: [
          'A dirty air filter is the most common culprit behind almost every symptom on that list — it restricts airflow, which makes the system work harder, run longer, and cool less effectively. It’s also the one thing a homeowner can check and fix in five minutes.',
          'Past the filter, common causes include a refrigerant leak (low refrigerant means the system can’t absorb heat properly), a failing capacitor or contactor (electrical parts that start and run the compressor and fan motors), a dirty outdoor condenser coil covered in grass clippings or cottonwood fluff, or a blower motor that’s struggling to move air.',
        ],
      },
      {
        heading: 'What a repair visit looks like',
        paragraphs: [
          'A proper visit starts with a diagnostic — checking electrical components, refrigerant levels, airflow, and the thermostat’s signal to the system — before anything gets replaced. You should get a clear explanation of what’s wrong and a quote before any repair work starts, not after.',
          'On a 100-degree Wichita day, a marginal system that’s been limping along is the one most likely to fail outright, which is why same day or next day appointments matter more here than in a milder climate.',
        ],
      },
    ],
    relatedSlugs: ['ac-not-cooling-wichita', 'signs-your-ac-needs-repair', 'hvac-maintenance-checklist-wichita'],
  },
  {
    slug: 'furnace-repair-wichita-ks',
    keyword: 'furnace repair wichita ks',
    metaTitle: 'Furnace Repair in Wichita, KS: Common Problems',
    metaDescription:
      'The most common reasons a furnace stops working in Wichita, what’s safe to check yourself, and when to call for repair.',
    eyebrow: 'Furnace Repair Guide',
    h1: 'Furnace Repair in Wichita, KS: Common Problems and Fixes',
    intro:
      'A furnace that worked fine last winter can fail on the first cold night of the season — usually because of something small that got overlooked over the summer. Here’s what tends to go wrong and what to do about it.',
    sections: [
      {
        heading: 'The usual suspects',
        bullets: [
          'A dirty or clogged air filter restricting airflow, which can overheat the system and trip a safety switch',
          'A dirty flame sensor, which reads the flame incorrectly and shuts the burner off (often shows up as short-cycling)',
          'A failing ignitor on systems without a standing pilot light',
          'Thermostat issues — dead batteries, a tripped breaker, or a setting that got bumped',
          'A blower motor that’s worn out or full of dust',
        ],
      },
      {
        heading: 'What’s normal vs. what’s not',
        paragraphs: [
          'A faint burning-dust smell the first time you run the furnace each season is normal — that’s dust burning off the heat exchanger and it clears in a few minutes. A smell that lingers, or any smell of gas, is not normal.',
          'A gas smell or a carbon monoxide alarm going off is not a repair-later situation. Shut the system off, get everyone out, and call for help immediately rather than troubleshooting it yourself.',
        ],
      },
      {
        heading: 'What a repair visit covers',
        paragraphs: [
          'A tech will check the thermostat signal, the ignition system, the flame sensor, the filter and airflow, and the safety controls that are designed to shut the furnace down before something worse happens. Most furnace calls come down to one of a handful of parts — the diagnostic is what narrows it down.',
        ],
      },
    ],
    relatedSlugs: ['furnace-wont-turn-on-wichita', 'hvac-maintenance-checklist-wichita', 'preventative-maintenance-hvac-wichita'],
  },
  {
    slug: 'same-day-ac-repair-wichita',
    keyword: 'same day ac repair wichita',
    metaTitle: 'Same Day AC Repair in Wichita: How It Works',
    metaDescription:
      'What "same day" AC repair actually means in Wichita, what to have ready when you call, and what happens during the visit.',
    eyebrow: 'Same Day Service',
    h1: 'Same Day AC Repair in Wichita: How It Works',
    intro:
      'When the AC goes out on a 100-degree afternoon, "we’ll get to it this week" isn’t much of an answer. Here’s what same day service actually looks like and how to make the call go faster.',
    sections: [
      {
        heading: 'What to have ready when you call',
        bullets: [
          'How old the system is, roughly',
          'What’s happening — no cool air, weak airflow, a noise, water, ice',
          'Whether the thermostat is on and set correctly',
          'Whether you’ve checked the breaker',
          'Your address and the best callback number',
        ],
      },
      {
        heading: 'What happens during the visit',
        paragraphs: [
          'A tech diagnoses the issue, walks you through what’s wrong in plain language, and gives you a quote before doing any repair work. If the parts are on the truck or available locally, most repairs happen in that same visit.',
          'Occasionally a specific part has to be ordered, in which case the honest answer is next day rather than same day — worth knowing upfront instead of being told same day for everything.',
        ],
      },
      {
        heading: 'While you’re waiting',
        bullets: [
          'If you see ice on the unit or a burning smell, turn the system off at the thermostat',
          'Close blinds on the sunny side of the house to cut down on heat gain',
          'Use fans to keep air moving in occupied rooms',
        ],
      },
    ],
    relatedSlugs: ['ac-repair-wichita-ks', 'ac-not-cooling-wichita', 'signs-your-ac-needs-repair'],
  },
  {
    slug: 'ac-not-cooling-wichita',
    keyword: 'ac not cooling wichita',
    metaTitle: 'AC Not Cooling in Wichita? Here’s What’s Wrong',
    metaDescription:
      'Quick checks to run yourself when your AC won’t cool, what the symptoms usually mean, and when to stop and call for repair.',
    eyebrow: 'Troubleshooting',
    h1: 'AC Not Cooling in Wichita? Here’s What’s Wrong',
    intro:
      'Before you assume the worst, there are a few things worth checking yourself — they take two minutes and fix the problem more often than you’d think.',
    sections: [
      {
        heading: 'Check these first',
        bullets: [
          'Thermostat is set to Cool, and the set temperature is below the room temperature',
          'The breaker for the AC hasn’t tripped',
          'The air filter isn’t visibly clogged',
          'The outdoor unit isn’t covered in leaves, grass clippings, or ice',
          'Vents around the house are open and not blocked by furniture',
        ],
      },
      {
        heading: 'If the system runs but doesn’t cool',
        paragraphs: [
          'Air moving but not cold usually points to a refrigerant leak, a struggling compressor, or dirty coils that can’t transfer heat properly. None of these are DIY fixes — they need a technician with gauges and training to diagnose safely.',
        ],
      },
      {
        heading: 'If the system won’t turn on at all',
        paragraphs: [
          'That’s more often electrical — a tripped breaker, a thermostat problem, or a failed capacitor that’s supposed to start the compressor and fan motors. Worth a quick breaker check, but past that it’s a call for a technician rather than something to keep testing on your own.',
        ],
      },
    ],
    relatedSlugs: ['ac-repair-wichita-ks', 'signs-your-ac-needs-repair', 'same-day-ac-repair-wichita'],
  },
  {
    slug: 'furnace-wont-turn-on-wichita',
    keyword: "furnace won't turn on wichita",
    metaTitle: 'Furnace Won’t Turn On in Wichita? Quick Checks',
    metaDescription:
      'Safe checks to run when your furnace won’t start in Wichita, what usually causes it, and when to stop and call for help.',
    eyebrow: 'Troubleshooting',
    h1: 'Furnace Won’t Turn On in Wichita? Troubleshooting Guide',
    intro:
      'A furnace that won’t start on a cold morning is stressful, but a few quick checks rule out the simplest causes before you need to call anyone.',
    sections: [
      {
        heading: 'Safe checks first',
        bullets: [
          'Thermostat: fresh batteries, set to Heat, and the target temperature above room temp',
          'Breaker or furnace switch: most furnaces have a switch that looks like a light switch nearby — make sure it’s on',
          'Air filter: a severely clogged filter can restrict airflow enough to trip a safety switch',
          'Pilot light, on older units that have one — check if it’s out',
        ],
      },
      {
        heading: 'If those don’t fix it',
        paragraphs: [
          'A furnace that still won’t fire after those checks is usually down to the ignitor, the flame sensor, or the control board — parts that need a technician to test and replace. Repeated attempts to force it to start without knowing why it’s not usually just delays the actual fix.',
        ],
      },
      {
        heading: 'When to stop and call immediately',
        paragraphs: [
          'A gas smell or a triggered carbon monoxide detector means stop troubleshooting, shut the system off, get everyone out, and call for help right away — that’s a safety issue, not a repair-when-convenient one.',
        ],
      },
    ],
    relatedSlugs: ['furnace-repair-wichita-ks', 'hvac-maintenance-checklist-wichita', 'preventative-maintenance-hvac-wichita'],
  },
  {
    slug: 'hvac-maintenance-checklist-wichita',
    keyword: 'hvac maintenance checklist',
    metaTitle: 'HVAC Maintenance Checklist for Wichita Homes',
    metaDescription:
      'A simple monthly and seasonal HVAC maintenance checklist built around Wichita’s hot summers and cold winters.',
    eyebrow: 'Maintenance Checklist',
    h1: 'HVAC Maintenance Checklist for Wichita Homes',
    intro:
      'Wichita asks a lot of a heating and cooling system — 100-degree summers and freezing winters in the same year — which makes routine maintenance matter more here than in a milder climate.',
    sections: [
      {
        heading: 'Every 1–3 months',
        bullets: [
          'Check the air filter and replace it if it’s visibly dirty — a restricted filter is behind most airflow and efficiency complaints',
          'Make sure vents and returns around the house aren’t blocked by furniture or rugs',
          'Glance at the outdoor unit for leaves, grass clippings, or debris and clear it off',
        ],
      },
      {
        heading: 'Seasonally',
        bullets: [
          'Spring: get the AC checked before the first real heat wave, not after it fails during one',
          'Fall: get the furnace checked before the first hard freeze',
        ],
      },
      {
        heading: 'What a professional tune-up generally covers',
        paragraphs: [
          'A typical visit includes inspecting electrical connections, checking refrigerant levels on an AC system, cleaning coils, testing safety controls on a furnace, lubricating moving parts, and checking the thermostat’s calibration — the kind of things that catch a small problem before it becomes a no-cool or no-heat emergency.',
        ],
      },
    ],
    relatedSlugs: ['preventative-maintenance-hvac-wichita', 'ac-repair-wichita-ks', 'furnace-repair-wichita-ks'],
  },
  {
    slug: 'ductless-mini-split-installation-wichita',
    keyword: 'ductless mini split installation wichita',
    metaTitle: 'Ductless Mini Split Installation in Wichita, KS',
    metaDescription:
      'How ductless mini split systems work, when they make sense for a Wichita home, and what installation involves.',
    eyebrow: 'Duct-Free Systems',
    h1: 'Ductless Mini Split Installation in Wichita, KS',
    intro:
      'A ductless (mini split) system heats and cools without ductwork — which makes it a fit for spaces a central system can’t easily reach.',
    sections: [
      {
        heading: 'How it works',
        paragraphs: [
          'A ductless system pairs one or more small indoor air handlers with an outdoor condenser, connected by a thin conduit carrying refrigerant lines and electrical wiring — no ducts required. Each indoor unit controls its own zone independently, so one room can run cooler or warmer than the next.',
        ],
      },
      {
        heading: 'Where it makes sense',
        bullets: [
          'A room addition or converted garage/shop with no existing ductwork',
          'Older homes that were never built with ducts',
          'One room that’s always too hot or too cold even though the main system is working fine',
          'Supplementing central air rather than replacing it',
        ],
      },
      {
        heading: 'What installation involves',
        paragraphs: [
          'Installation means mounting the indoor unit, setting the outdoor condenser on a pad or bracket, and running the refrigerant line set and electrical between them — refrigerant work specifically should be done by a licensed technician, not a DIY project. Once it’s in, day-to-day maintenance is simple: mainly regular filter cleaning on the indoor unit.',
        ],
      },
    ],
    relatedSlugs: ['hvac-maintenance-checklist-wichita', 'indoor-air-quality-wichita-ks', 'ac-repair-wichita-ks'],
  },
  {
    slug: 'indoor-air-quality-wichita-ks',
    keyword: 'indoor air quality wichita ks',
    metaTitle: 'Indoor Air Quality in Wichita, KS: What to Know',
    metaDescription:
      'What affects indoor air quality in Wichita homes, the signs it’s a problem, and the basics of improving it.',
    eyebrow: 'Air Quality',
    h1: 'Indoor Air Quality in Wichita, KS: What Homeowners Should Know',
    intro:
      'Indoor air runs 2 to 5x more polluted than outside air — and a Wichita home that’s sealed up tight during a 100-degree summer or a hard winter freeze is recirculating that same air for weeks at a time.',
    sections: [
      {
        heading: 'What affects it locally',
        bullets: [
          'Kansas pollen seasons tracking inside on clothes, shoes, and open windows',
          'Dust and pet dander building up in ductwork and filters over time',
          'Homes staying closed up for long stretches during summer heat and winter cold, which limits fresh air exchange',
          'Humidity swings that can make a home feel stuffy even when the temperature is fine',
        ],
      },
      {
        heading: 'Signs it might be worth addressing',
        bullets: [
          'A home that feels stuffy or stale even when it’s not hot',
          'Allergy or sinus symptoms that are worse indoors than outdoors',
          'Visible dust buildup on vents, furniture, or the filter faster than expected',
          'Noticeable humidity, even with the AC running',
        ],
      },
      {
        heading: 'The basics of improving it',
        paragraphs: [
          'Regular filter changes are the foundation — a clean filter is doing its job of catching particles before they recirculate. Past that, options include better filtration equipment, duct cleaning when it’s genuinely needed, and humidity control, all of which a technician can evaluate for your specific system.',
        ],
      },
    ],
    relatedSlugs: ['hvac-maintenance-checklist-wichita', 'ductless-mini-split-installation-wichita', 'preventative-maintenance-hvac-wichita'],
  },
  {
    slug: 'preventative-maintenance-hvac-wichita',
    keyword: 'preventative maintenance hvac wichita',
    metaTitle: 'What’s Included in HVAC Preventative Maintenance',
    metaDescription:
      'A walkthrough of what a typical HVAC preventative maintenance visit covers in Wichita, and why it’s worth doing yearly.',
    eyebrow: 'Preventative Maintenance',
    h1: 'What Happens During HVAC Preventative Maintenance in Wichita',
    intro:
      'A preventative maintenance visit is meant to catch the small stuff before it turns into a no-cool or no-heat emergency on the worst possible day.',
    sections: [
      {
        heading: 'What a typical visit includes',
        bullets: [
          'A visual inspection of the whole system',
          'Checking electrical connections for wear',
          'Checking refrigerant charge on an AC system',
          'Checking and clearing the condensate drain, which can clog and cause water damage or shutdowns',
          'Checking or replacing the air filter',
          'Testing the thermostat’s calibration and signal to the system',
          'Testing safety controls on a furnace',
          'Lubricating moving parts and cleaning coils',
        ],
      },
      {
        heading: 'Why it’s worth doing',
        paragraphs: [
          'Most of the emergency no-cool and no-heat calls trace back to something that had been building for a while — a slow refrigerant leak, a clogged drain, a part wearing out. A yearly check catches those early, protects the system’s expected lifespan, and keeps it running efficiently.',
        ],
      },
      {
        heading: 'How often',
        paragraphs: [
          'Generally once a year per system — AC in spring before the heat arrives, furnace in fall before the cold does — which covers both systems across the year.',
        ],
      },
    ],
    relatedSlugs: ['hvac-maintenance-checklist-wichita', 'signs-your-ac-needs-repair', 'furnace-wont-turn-on-wichita'],
  },
  {
    slug: 'signs-your-ac-needs-repair',
    keyword: 'signs your ac needs repair',
    metaTitle: '10 Signs Your AC Needs Repair in Wichita',
    metaDescription:
      'Ten warning signs that your AC needs repair before it fails outright on a hot Wichita day.',
    eyebrow: 'Warning Signs',
    h1: '10 Signs Your AC Needs Repair in Wichita',
    intro:
      'A system rarely fails without warning — it usually gives you a few signs first. Catching one of these early is a lot less painful than a full breakdown in a 100-degree week.',
    sections: [
      {
        heading: 'The 10 signs',
        bullets: [
          '1. Warm air coming from the vents instead of cool air',
          '2. Weak airflow even with the fan on',
          '3. The system cycling on and off more frequently than normal',
          '4. Grinding, squealing, or banging noises',
          '5. Musty or burning odors when it runs',
          '6. Water pooling near the indoor unit',
          '7. Rooms staying humid even while the AC is running',
          '8. A noticeable jump in your energy bill with no change in usage',
          '9. Ice forming on the refrigerant line or an indoor coil',
          '10. A thermostat that seems unresponsive or reads inaccurately',
        ],
      },
      {
        heading: 'Why it’s worth acting early',
        paragraphs: [
          'Any one of these on its own is often a small, inexpensive fix. Ignored, most of them get worse under load — and Wichita summers put systems under load for months at a time, which is exactly when a marginal problem turns into a full breakdown.',
        ],
      },
    ],
    relatedSlugs: ['ac-not-cooling-wichita', 'ac-repair-wichita-ks', 'same-day-ac-repair-wichita'],
  },
]

export function getHowToPage(slug: string) {
  return HOW_TO_PAGES.find((p) => p.slug === slug)
}

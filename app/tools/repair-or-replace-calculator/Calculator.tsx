'use client'

import { useMemo, useState } from 'react'
import { Phone, EnvelopeSimple } from '@phosphor-icons/react'
import { PHONE, PHONE_HREF, SCHEDULE_HREF } from '@/components/brand'

type Severity = 'minor' | 'moderate' | 'major'

const AGE_THRESHOLD_YEARS = 10
const COST_RATIO_THRESHOLD = 0.3 // repair cost as a share of a full replacement

type Result = {
  headline: string
  detail: string
  tone: 'replace' | 'repair' | 'mixed' | 'incomplete'
}

function getResult(
  age: string,
  repairCost: string,
  replacementCost: string,
  severity: Severity | ''
): Result {
  const ageNum = age === '' ? null : Number(age)
  const repairNum = repairCost === '' ? null : Number(repairCost)
  const replacementNum = replacementCost === '' ? null : Number(replacementCost)

  if (ageNum === null || repairNum === null) {
    return {
      headline: 'Fill in your system’s age and the repair estimate',
      detail: 'Those two numbers are what this tool reasons from — everything else just sharpens the answer.',
      tone: 'incomplete',
    }
  }

  const isOld = ageNum >= AGE_THRESHOLD_YEARS

  let costHigh: boolean | null = null
  if (replacementNum && replacementNum > 0) {
    costHigh = repairNum / replacementNum >= COST_RATIO_THRESHOLD
  } else if (severity) {
    costHigh = severity === 'major' ? true : severity === 'minor' ? false : null
  }

  if (costHigh === null) {
    return {
      headline: isOld
        ? 'Your system is past the age where repairs start getting less worth it'
        : 'Your system is young enough that repair is usually still the right call',
      detail: replacementNum
        ? 'Add a rough replacement cost, or pick a repair severity below, and this will sharpen into a clearer recommendation.'
        : 'Pick roughly how big this repair is (minor, moderate, or major) and this will sharpen into a clearer recommendation.',
      tone: 'incomplete',
    }
  }

  if (isOld && costHigh) {
    return {
      headline: 'Replacement is usually the better value here',
      detail: `Your system is ${ageNum} years old, past the point where major repairs tend to be worth it, and this repair is a large share of what a new system typically costs. Putting that money toward a new system instead is usually the stronger long-term move.`,
      tone: 'replace',
    }
  }

  if (isOld && !costHigh) {
    return {
      headline: 'This repair likely makes sense right now',
      detail: `Your system is ${ageNum} years old, but this specific repair is relatively small. It’s reasonable to fix it — just keep replacement in mind if a bigger repair comes up down the road.`,
      tone: 'mixed',
    }
  }

  if (!isOld && costHigh) {
    return {
      headline: 'Get a second opinion before deciding',
      detail: `This repair is expensive relative to a new system, but your system is only ${ageNum} years old. That combination is worth a second look — sometimes it’s the right call, sometimes the estimate itself needs a closer look.`,
      tone: 'mixed',
    }
  }

  return {
    headline: 'Repair is usually the better value here',
    detail: `Your system is ${ageNum} years old and this repair is relatively small next to the cost of a full replacement. Repairing it is the straightforward choice.`,
    tone: 'repair',
  }
}

const TONE_STYLES: Record<Result['tone'], string> = {
  replace: 'border-brand-primary/30 bg-brand-primary-pale/50',
  repair: 'border-brand-primary/30 bg-brand-primary-pale/50',
  mixed: 'border-brand-accent/40 bg-brand-accent-light/30',
  incomplete: 'border-border bg-warm',
}

export default function Calculator() {
  const [age, setAge] = useState('')
  const [repairCost, setRepairCost] = useState('')
  const [replacementCost, setReplacementCost] = useState('')
  const [severity, setSeverity] = useState<Severity | ''>('')

  const result = useMemo(
    () => getResult(age, repairCost, replacementCost, severity),
    [age, repairCost, replacementCost, severity]
  )

  return (
    <div className="bg-white rounded-3xl border border-border p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <label className="block">
          <span className="text-ink text-sm font-semibold mb-2 block">
            How old is your AC or furnace? (years)
          </span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 12"
            className="w-full rounded-xl border border-border px-4 py-3 text-ink text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/50"
          />
        </label>

        <label className="block">
          <span className="text-ink text-sm font-semibold mb-2 block">
            Estimated repair cost ($)
          </span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={repairCost}
            onChange={(e) => setRepairCost(e.target.value)}
            placeholder="e.g. 650"
            className="w-full rounded-xl border border-border px-4 py-3 text-ink text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/50"
          />
        </label>

        <label className="block">
          <span className="text-ink text-sm font-semibold mb-2 block">
            Rough cost of a full replacement ($)
            <span className="text-ink-muted font-normal"> &mdash; optional</span>
          </span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={replacementCost}
            onChange={(e) => setReplacementCost(e.target.value)}
            placeholder="Use a quote if you have one"
            className="w-full rounded-xl border border-border px-4 py-3 text-ink text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/50"
          />
        </label>

        <label className="block">
          <span className="text-ink text-sm font-semibold mb-2 block">
            Or, roughly how big is this repair?
            <span className="text-ink-muted font-normal"> &mdash; used if you skip replacement cost</span>
          </span>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value as Severity | '')}
            className="w-full rounded-xl border border-border px-4 py-3 text-ink text-base bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/50"
          >
            <option value="">Select one</option>
            <option value="minor">Minor &mdash; a small part or quick fix</option>
            <option value="moderate">Moderate &mdash; a bigger component</option>
            <option value="major">Major &mdash; compressor, heat exchanger, or similar</option>
          </select>
        </label>
      </div>

      <div className={`rounded-2xl border p-6 md:p-7 ${TONE_STYLES[result.tone]}`}>
        <h3
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          className="text-ink text-xl md:text-2xl tracking-tight mb-2"
        >
          {result.headline}
        </h3>
        <p className="text-ink-soft text-sm leading-relaxed">{result.detail}</p>
      </div>

      <p className="text-ink-muted text-xs leading-relaxed mt-5">
        This is general reasoning, not a quote or a sourced statistic — it uses a common rule
        of thumb (system age past {AGE_THRESHOLD_YEARS} years, repair cost near{' '}
        {Math.round(COST_RATIO_THRESHOLD * 100)}% or more of a full replacement) to point you in a
        direction. Your specific system, brand, and Wichita installation conditions can change the
        real answer &mdash; a technician can give you a firm one.
      </p>

      <div className="mt-8 pt-8 border-t border-black/8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={PHONE_HREF}
          className="animate-pulse-ring relative flex items-center justify-center gap-2 bg-urgent text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-urgent/90 active:scale-[0.98] transition-all"
        >
          <Phone size={16} weight="fill" />
          {PHONE}
        </a>
        <a
          href={SCHEDULE_HREF}
          className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-primary/90 active:scale-[0.98] transition-all"
        >
          <EnvelopeSimple size={16} weight="bold" />
          Get a Firm Quote From Spiker
        </a>
      </div>
    </div>
  )
}

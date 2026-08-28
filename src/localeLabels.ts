export type ShortcutLabels = {
  today: string
  tomorrow: string
  thisWeekend: string
  thisWeek: string
  currentMonth: string
  thisYear: string
}

export type SessionLabels = {
  morning: string
  afternoon: string
  evening: string
  night: string
}

const EN_SHORTCUTS: ShortcutLabels = {
  today: 'Today',
  tomorrow: 'Tomorrow',
  thisWeekend: 'Weekend',
  thisWeek: 'Week',
  currentMonth: 'Month',
  thisYear: 'Year',
}

const EN_SESSION: SessionLabels = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
  night: 'Night',
}

const shortcutLabelsByLocale: Record<string, ShortcutLabels> = {
  en: EN_SHORTCUTS,
  'en-gb': EN_SHORTCUTS,
  nl: {
    today: 'Vandaag',
    tomorrow: 'Morgen',
    thisWeekend: 'Weekend',
    thisWeek: 'Week',
    currentMonth: 'Maand',
    thisYear: 'Jaar',
  },
  fr: {
    today: "Aujourd'hui",
    tomorrow: 'Demain',
    thisWeekend: 'Week-end',
    thisWeek: 'Semaine',
    currentMonth: 'Mois',
    thisYear: 'Année',
  },
}

const sessionLabelsByLocale: Record<string, SessionLabels> = {
  en: EN_SESSION,
  'en-gb': EN_SESSION,
  nl: {
    morning: 'Ochtend',
    afternoon: 'Middag',
    evening: 'Avond',
    night: 'Nacht',
  },
  fr: {
    morning: 'Matin',
    afternoon: 'Après-midi',
    evening: 'Soir',
    night: 'Nuit',
  },
}

const clearLabelByLocale: Record<string, string> = {
  en: 'Clear',
  'en-gb': 'Clear',
  nl: 'Wissen',
  fr: 'Effacer',
}

export function resolveLocaleKey(i18n?: string): string {
  const code = String(i18n || 'en').toLowerCase()
  if (code.startsWith('nl'))
    return 'nl'
  if (code.startsWith('fr'))
    return 'fr'
  if (code === 'en-gb' || code.startsWith('en-gb'))
    return 'en-gb'
  return 'en'
}

function pickLabel(override: string | undefined, fallback: string): string {
  return override && override.trim() ? override : fallback
}

export function resolveShortcutLabels(
  i18n: string | undefined,
  override?: Partial<ShortcutLabels>,
): ShortcutLabels {
  const base = shortcutLabelsByLocale[resolveLocaleKey(i18n)] || EN_SHORTCUTS
  return {
    today: pickLabel(override?.today, base.today),
    tomorrow: pickLabel(override?.tomorrow, base.tomorrow),
    thisWeekend: pickLabel(override?.thisWeekend, base.thisWeekend),
    thisWeek: pickLabel(override?.thisWeek, base.thisWeek),
    currentMonth: pickLabel(override?.currentMonth, base.currentMonth),
    thisYear: pickLabel(override?.thisYear, base.thisYear),
  }
}

export function resolveSessionLabels(
  i18n: string | undefined,
  override?: Partial<SessionLabels>,
): SessionLabels {
  const base = sessionLabelsByLocale[resolveLocaleKey(i18n)] || EN_SESSION
  return {
    morning: pickLabel(override?.morning, base.morning),
    afternoon: pickLabel(override?.afternoon, base.afternoon),
    evening: pickLabel(override?.evening, base.evening),
    night: pickLabel(override?.night, base.night),
  }
}

export function resolveClearLabel(
  i18n: string | undefined,
  override?: string,
): string {
  return pickLabel(override, clearLabelByLocale[resolveLocaleKey(i18n)] || 'Clear')
}

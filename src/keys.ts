import type { InjectionKey, Ref } from 'vue'
import type { Dayjs } from 'dayjs'
import type { DatePickerDay } from './types'

const isBetweenRangeKey: InjectionKey<(date: DatePickerDay) => boolean> =
  Symbol('isBetweenRange')
const betweenRangeClassesKey: InjectionKey<(date: Dayjs) => string> = Symbol(
  'betweenRangeClasses',
)
const datepickerClassesKey: InjectionKey<
  (date: DatePickerDay) => string | undefined
> = Symbol('datepickerClasses')
const atMouseOverKey: InjectionKey<(date: Dayjs) => false | undefined> =
  Symbol('atMouseOver')
const setToTodayKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToToday')
const setToTomorrowKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToTomorrow')
// const setToYesterdayKey: InjectionKey<
//   (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
// > = Symbol('setToYesterday')
// const setToLastDayKey: InjectionKey<
//   (day: number, close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
// > = Symbol('setToLastDay')         
const setToThisWeekendKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToThisWeekend')
const setToThisWeekKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToThisWeek')
const setToThisMonthKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToThisMonth')
const setToThisYearKey: InjectionKey<
  (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
> = Symbol('setToThisYear')
// const setToLastMonthKey: InjectionKey<
//   (close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void
// > = Symbol('setToLastMonth')
const setToCustomShortcutKey: InjectionKey<
  (
    item: { label: string; atClick: () => Date[] },
    close?: (ref?: Ref | HTMLElement) => void,
  ) => void
> = Symbol('setToCustomShortcut')

export {
  isBetweenRangeKey,
  betweenRangeClassesKey,
  datepickerClassesKey,
  atMouseOverKey,
  setToTodayKey,
  setToTomorrowKey,
  setToThisMonthKey,
  setToThisWeekendKey,
  setToThisWeekKey,
  setToThisYearKey,
  setToCustomShortcutKey,
  // setToLastDayKey,
  // setToYesterdayKey,
  // setToLastMonthKey,
}

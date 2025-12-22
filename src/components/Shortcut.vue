<script setup lang="ts">
import type { Ref } from 'vue'
import { computed } from 'vue'
import { injectStrict } from '../utils'
import {
  setToCustomShortcutKey,
  setToTodayKey,
  setToTomorrowKey,
  setToThisWeekendKey,
  setToThisWeekKey,
  setToThisMonthKey,
  setToThisYearKey      
} from '../keys'

const props = defineProps<{
  shortcuts: boolean | (() => { label: string; atClick: () => Date[] }[])
  close?: (ref?: Ref | HTMLElement) => void
  asRange: boolean
  asSingle: boolean
  i18n: {
    today: string    
    tomorrow: string        
    thisWeekend: string,
    thisWeek: string,
    currentMonth: string,
    thisYear: string    
  }
}>()

const setToToday = injectStrict(setToTodayKey)
const setToTomorrow = injectStrict(setToTomorrowKey)
const setToThisWeekend = injectStrict(setToThisWeekendKey)
const setToThisWeek = injectStrict(setToThisWeekKey)
const setToThisMonth = injectStrict(setToThisMonthKey)
const setToThisYear = injectStrict(setToThisYearKey)
const setToCustomShortcut = injectStrict(setToCustomShortcutKey)

const withShortcut = computed(() => {
  return typeof props.shortcuts === 'function' ? props.shortcuts() : false
})
</script>

<template>
  <div
    v-if="(props.asRange && props.asSingle) || (props.asRange && !props.asSingle)
    "
    class="relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/10 order-last sm:order-0 dark:border-vtd-secondary-700 sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto"
  >
    <ol
      v-if="withShortcut"
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li v-for="(item, i) in withShortcut" :key="i">
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToCustomShortcut(item, close)" v-text="item.label"
        />
      </li>
    </ol>
    <ol
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToToday()"
        >
          {{ props.i18n.today }}
        </a>
      </li>
      <!-- <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray focus:text-vtd-primary-600"
          @click.prevent="setToYesterday(close)"
        >
          {{ props.i18n.yesterday }}
        </a>
      </li> -->
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToTomorrow()"
        >
          {{ props.i18n.tomorrow }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToThisWeekend()"
        >
          {{ props.i18n.thisWeekend }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToThisWeek()"
        >
          {{ props.i18n.thisWeek }}
        </a>
      </li>           
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToThisMonth()"
        >
          {{ props.i18n.currentMonth }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray"
          @click.prevent="setToThisYear()"
        >
          {{ props.i18n.thisYear }}
        </a>
      </li>     
    </ol>
  </div>
</template>

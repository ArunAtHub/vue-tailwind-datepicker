<script setup lang="ts">
defineProps<{
  panel: {
    calendar: boolean
    month: boolean
    year: boolean
  }
  calendar: {
    date: () => any[]
    month: string
    year: number
    years: () => number[]
    onPrevious: () => void
    onNext: () => void
    onPreviousYear: () => void
    onNextYear: () => void
    openMonth: () => void
    setMonth: ($event: number) => void
    openYear: () => void
    setYear: ($event: number) => void
  }
}>()
</script>

<template>
  <div class="flex justify-between items-center px-2 py-1.5">
    <div class="shrink-0">      
        <button
          v-show="panel.calendar || panel.year"
          type="button"
          class="p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]"
          @click="
            panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="panel.calendar
                ? `M15 19l-7-7 7-7`
                : `M11 19l-7-7 7-7m8 14l-7-7 7-7`
              "
            />
          </svg>
        </button>      
    </div>
    <div class="px-1.5 space-x-1.5 flex flex-1">
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden"
          @click="calendar.openMonth()" v-text="calendar.month"
        />
      </span>
      <span class="flex-1 flex rounded-md">
        <button
          type="button"
          class="px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden"
          @click="calendar.openYear()" v-text="calendar.year"
        />
      </span>
    </div>
    <div class="shrink-0">      
        <button
          v-show="panel.calendar || panel.year"
          type="button"
          class="p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]"
          @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            />
          </svg>
        </button>      
    </div>
  </div>
</template>

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
  <div class="flex justify-between items-center px-1 py-1">
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
  </div>
</template>

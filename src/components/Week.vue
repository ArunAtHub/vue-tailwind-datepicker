<script setup lang="ts">
import type { LengthArray } from '../types'

defineProps<{
  weeks: LengthArray<string, 7>
}>()
</script>

<template>
  <div class="grid grid-cols-7 py-2 mt-0.5">
    <div
      v-for="(day, keyDay) in weeks"
      :key="keyDay"
      class="text-vtd-dark-blue text-sm lg:text-md tracking-wide font-bold text-center cursor-default"
    >
      <span v-text="day" />
    </div>
  </div>
</template>

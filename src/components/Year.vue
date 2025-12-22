<script setup lang="ts">
defineProps<{
  years: number[]
}>()

const emit = defineEmits<{
  (e: 'updateYear', value: number): void
}>()
</script>

<template>
  <div class="flex flex-wrap">
    <div v-for="(year, key) in years" :key="key" class="w-1/2 px-0.5">
      <span class="flex rounded-md mt-1.5">
        <button
          type="button"
          class="px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue"
          @click="emit('updateYear', year)"
          v-text="year"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  current_index: number
  current_notes: string[]
}>()
</script>

<template>
  <div class="bg-zinc-900 border border-zinc-800 rounded-xl flex gap-x-4 items-center px-4 py-1">
    <p 
      v-for="(note, index) in current_notes" 
      :key="note"
      :class="index === current_index ? 'text-primary-400 font-bold' : 'text-white'"
    >
      {{ note }}
    </p>
  </div>
</template>
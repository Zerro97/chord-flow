<script setup lang="ts">
defineProps<{
  current_index: number
  current_notes: string[]
}>()
</script>

<template>
  <div class="bg-zinc-900 border border-zinc-800 rounded-xl flex items-center px-2 py-0.5">
    <UTooltip
      v-for="(note, index) in current_notes" 
      :key="note"
      text="Enabled"
    >
      <p :class="`${index === current_index ? 'text-primary-400 font-bold' : 'text-white'} hover:cursor-pointer rounded-lg px-2 hover:bg-black`">
        {{ note }}
      </p>
    </UTooltip>
  </div>
</template>
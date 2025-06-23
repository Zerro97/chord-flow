<script setup lang="ts">
const metronome_count = defineModel<string>('metronome_count')
defineProps<{
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
      <p :class="`${index === Math.floor(metronome_count / 4) % 7 ? 'text-primary-400 font-bold' : 'text-white'} hover:cursor-pointer rounded-lg px-2 hover:bg-black`">
        {{ note }}
      </p>
    </UTooltip>
  </div>
</template>
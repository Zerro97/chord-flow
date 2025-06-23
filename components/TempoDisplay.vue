<script setup lang="ts">
const metronome_count = defineModel<string>('metronome_count')
const props = defineProps<{
  time_signature: string
}>()
const tempo_count_map = {
  "4/4": 4,
  "3/4": 3,
  "2/4": 2,
  "6/8": 6,
}
const tempo = computed(() => tempo_count_map[props.time_signature] ?? 1)
</script>

<template>
  <div class="flex gap-x-10 items-center">
    <div
      v-for="(_, i) in tempo"
      :key="i"
      :class="`rounded-full p-2 ${metronome_count % 4 === i ? 'bg-zinc-600' : 'bg-zinc-800'}`"
    />
  </div>
</template>
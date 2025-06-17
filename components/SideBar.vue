<script setup lang="ts">
// 

// Filters
const bpm = ref(100)

const time_signatures = ref(["4/4", "3/4", "2/4", "6/8"])
const current_time_signature = ref("4/4")

const keys = ref(["C", "D", "E", "F", "G", "A", "B"])
const current_key = ref("C")

const scales = ref(["major", "natural_minor"])
const current_scale = ref("major")

// Computed Values
const current_notes = computed(() => get_scale_notes(current_key.value, current_scale.value))
</script>

<template>
  <div class="flex flex-col gap-y-6 w-[300px] px-4 py-4 bg-zinc-900 border-r border-zinc-800">
    <UFormField label="BPM">
      <UInputNumber v-model="bpm" :min="0" :max="200" variant="subtle"/>
    </UFormField>
    <UFormField label="Time Signature">
      <URadioGroup v-model="current_time_signature" :items="time_signatures" />
    </UFormField>
    <UFormField label="Key">
      <USelect v-model="current_key" :items="keys" variant="subtle"/>
    </UFormField>
    <UFormField label="Scale">
      <USelect v-model="current_scale" :items="scales" variant="subtle"/>
    </UFormField>
    <p>{{ current_notes }}</p>
  </div>
</template>
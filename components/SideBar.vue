<script setup lang="ts">
// Selected value props
const current_bpm = defineModel<number>('current_bpm')
const current_time_signature = defineModel<string>('current_time_signature')
const current_scale = defineModel<string>('current_scale')
const current_key = defineModel<string>('current_key')

// Filters
const time_signatures = ref(["4/4", "3/4", "2/4", "6/8"])
const keys = ref(note)
const scales = ref(["major", "natural_minor"])
const randomize = ref(true)
</script>

<template>
  <div class="flex flex-col gap-y-2 w-[300px] px-4 py-4 bg-zinc-900 border-r border-zinc-800">
    <p class="font-bold">Tempo</p>
    <UFormField label="BPM">
      <UInputNumber v-model="current_bpm" :min="0" :max="200" variant="subtle"/>
    </UFormField>
    <UFormField label="Time Signature">
      <URadioGroup v-model="current_time_signature" :items="time_signatures" />
    </UFormField>
    <USeparator class="my-2" />
    <p class="font-bold">Chord</p>
    <UFormField label="Key">
      <USelect v-model="current_key" :items="keys" variant="subtle" class="min-w-[80px]"/>
    </UFormField>
    <UFormField label="Scale">
      <USelect v-model="current_scale" :items="scales" variant="subtle"/>
    </UFormField>
    <USeparator class="my-2" />
    <p class="font-bold">Note</p>
    <UFormField label="Randomize">
      <USwitch v-model="randomize" />
    </UFormField>
  </div>
</template>
<script setup lang="ts">
import * as Tone from "tone";

// Selected value props
const current_bpm = defineModel<number>('current_bpm')
const current_time_signature = defineModel<string>('current_time_signature')
const current_scale = defineModel<string>('current_scale')
const current_key = defineModel<string>('current_key')
const current_volume = defineModel<number>('current_volume')
const current_chord_progression = defineModel<string>('current_chord_progression')
const current_synth_type = defineModel<string>('current_synth_type')
const current_style = defineModel<string>('current_style')

// Filters
const styles = ref(["melodic", "harmonic"])
const synth_types = ref(["Click", "Bass", "Beep"])
const time_signatures = ref(["4/4", "3/4", "2/4", "6/8"])
const keys = ref(note)
const scales = ref(["major", "natural_minor"])
const randomize = ref(true)
const play_note = ref(true)

// Apply changes
watch(() => {
  const transport = Tone.getTransport()

  if(transport.bpm) {
    transport.bpm.value = current_bpm.value;
  }
})
</script>

<template>
  <div class="flex flex-col w-[300px] bg-zinc-900 border-r border-zinc-800">
    <div class="border-b-1 border-zinc-800 px-5 py-2">
      <p class="font-bold text-xl">Chord Flow</p>
    </div>
    <div class="overflow-y-auto">
      <UCollapsible :default-open="true" class="flex flex-col border-b-1 border-zinc-800">
        <UButton
          class="group font-bold bg-zinc-900 ring-0 rounded-none px-5 hover:cursor-pointer"
          label="Tempo"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-down"
          :ui="{
            trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
          }"
          block
        />
        <template #content>
          <div class="flex flex-col gap-y-3 px-5 pt-1 pb-3">
            <UFormField label="BPM">
              <UInputNumber v-model="current_bpm" :min="30" :max="250" variant="subtle"/>
              <USlider v-model="current_bpm" :min="30" :max="250" variant="subtle" class="mt-3 mb-1"/>
            </UFormField>
            <UFormField label="Time Signature">
              <URadioGroup v-model="current_time_signature" :items="time_signatures" />
            </UFormField>
          </div>
        </template>
      </UCollapsible>
      <UCollapsible :default-open="true" class="flex flex-col border-b-1 border-zinc-800">
        <UButton
          class="group font-bold bg-zinc-900 ring-0 rounded-none px-5 hover:cursor-pointer"
          label="Chord"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-down"
          :ui="{
            trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
          }"
          block
        />
        <template #content>
          <div class="flex flex-col gap-y-3 px-5 pt-1 pb-3">
            <UFormField label="Key">
              <USelect v-model="current_key" :items="keys" variant="subtle" class="min-w-[80px]"/>
            </UFormField>
            <UFormField label="Scale">
              <USelect v-model="current_scale" :items="scales" variant="subtle"/>
            </UFormField>
            <UFormField label="Style">
              <div class="flex flex-col gap-y-3">
                <USelect v-model="current_style" :items="styles" variant="subtle" />
                <HarmonicModal v-if="current_style == 'harmonic'" v-model="current_chord_progression" />
              </div>
            </UFormField>
          </div>
        </template>
      </UCollapsible>
      <UCollapsible :default-open="true" class="flex flex-col border-b-1 border-zinc-800">
        <UButton
          class="group font-bold bg-zinc-900 ring-0 rounded-none px-5 hover:cursor-pointer"
          label="Other"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-down"
          :ui="{
            trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
          }"
          block
        />
        <template #content>
          <div class="flex flex-col gap-y-3 px-5 pt-1 pb-3">
            <UFormField label="Randomize">
              <USwitch v-model="randomize" />
            </UFormField>
            <UFormField label="Play Notes">
              <USwitch v-model="play_note" />
            </UFormField>
            <UFormField label="Synth Type">
              <USelect v-model="current_key" :items="keys" variant="subtle" class="min-w-[80px]"/>
            </UFormField>
            <UFormField :label="`Volume (${current_volume} db)`">
              <USlider v-model="current_volume" :min="0" :max="50" class="py-1" />
            </UFormField> 
          </div>
        </template>
      </UCollapsible>
    </div>
  </div>
</template>
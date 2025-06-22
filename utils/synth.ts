import type * as Tone from "tone"
import type { RecursivePartial } from "tone/build/esm/core/util/Interface";

const synth_type: Readonly<{
  click: RecursivePartial<Tone.SynthOptions>,
  click_accent: RecursivePartial<Tone.SynthOptions>,
  beep: RecursivePartial<Tone.MembraneSynthOptions>,
  bass: RecursivePartial<Tone.FMSynthOptions>,
}> = { 
  click: {
    oscillator: { type: "square" },
    envelope: { attack: 0.001, decay: 0, sustain: 0, release: 1 },
  },
  click_accent: {
    oscillator: { type: "fatsawtooth" },
    envelope: { attack: 0.001, decay: 0, sustain: 0, release: 0 },
  },
  beep: {
    pitchDecay: 0.05,
    octaves: 4,
    envelope: { attack: 0.001, decay: 0, sustain: 0, release: 0 },
  },
  bass: {
    modulationIndex: 16,
    harmonicity: 0.5,
    envelope: { attack: 0.001, decay: 0, sustain: 0, release: 0 },
  },
};
export const SYNTH_TYPE = Object.freeze(synth_type)

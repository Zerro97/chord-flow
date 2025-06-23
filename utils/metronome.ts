import * as Tone from "tone";

export function start_metronome() {
  const context = Tone.getContext()
  if(context.state != "running") {
    console.error("Audio context is not running")
    return
  }

  const transport = Tone.getTransport()
  transport.start(Tone.now() + 0.01);
}

export function stop_metronome() {
  const context = Tone.getContext()
  if(context.state != "running") {
    console.error("Audio context is not running")
    return
  }
  
  const transport = Tone.getTransport()
  transport.stop();
}

export function set_metronome(
  volume: number, 
  bpm: number, 
  time_signature: string,
  synth_type: string,
  metronome_count: Ref<number>,
): number {
  // Get synth for metronome
  const base_synth = new Tone.Synth(SYNTH_TYPE.click).toDestination();
  const first_synth = new Tone.Synth(SYNTH_TYPE.click_accent).toDestination();
  base_synth.volume.value = volume;

  // Set transport for tempo
  const transport = Tone.getTransport()
  transport.bpm.value = bpm;
  transport.timeSignature = [4, 4];
  const schedule_id = transport.scheduleRepeat((time) => {
    const is_first_beat = metronome_count.value % 4 === 3;
    if (is_first_beat) {
      first_synth.triggerAttackRelease("C2", "8n", time); // Accent note
    } else {
      base_synth.triggerAttackRelease("C2", "8n", time); // Normal click
    }

    metronome_count.value++;
  }, "4n");

  return schedule_id
}
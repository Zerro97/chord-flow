import { note, scale } from './constants';

export function get_scale_notes(selected_key: string, selected_scale: string): string[] {
  const key_index = note.indexOf(selected_key);
  if (key_index === -1) throw new Error(`Invalid key note: ${selected_key}`);

  const intervals = scale[selected_scale];
  if (!intervals) throw new Error(`Invalid scale name: ${selected_scale}`);

  const scale_notes: string[] = [selected_key];
  let current_index = key_index;

  for (const interval of intervals) {
    current_index = (current_index + interval) % note.length;
    scale_notes.push(note[current_index]);
  }

  return scale_notes;
}
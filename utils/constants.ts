export const note = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
export const note_map = {
  // Flats
  "A♭": "G♯",
  "B♭": "A♯",
  "C♭": "B",
  "D♭": "C♯",
  "E♭": "D♯",
  "F♭": "E",
  "G♭": "F♯",
  // Sharps
  "G♯": "A♭",
  "A♯": "B♭",
  "B♯": "C",
  "C♯": "D♭",
  "D♯": "E♭",
  "E♯": "F",
  "F♯": "G♭",
}
export const scale = {
  major: [2, 2, 1, 2, 2, 2, 1],
  natural_minor: [2, 1, 2, 2, 1, 2, 2],
  harmonic_minor: [2, 1, 2, 2, 1, 3, 1],
  melodic_minor: [2, 1, 2, 2, 2, 2, 1],
  pentatonic_major: [2, 2, 3, 2, 3],
  blues_minor: [3, 2, 1, 1, 3, 2],
}
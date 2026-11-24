// Small inline SVG icon set per trade (stroke icons, 24px grid). Decorative only.
const P: Record<string, string> = {
  painter: '<path d="M4 4h12v5H4z"/><path d="M16 6.5h3v5h-8v3"/><path d="M10 14.5h2v6h-2z"/>',
  joiner: '<path d="M3 17l9-9 4 4-9 9H3z"/><path d="M14 6l2-2 4 4-2 2"/><path d="M6 14l4 4"/>',
  landscaper: '<path d="M12 21v-8"/><path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z"/><path d="M5 21h14"/>',
  roofer: '<path d="M3 12l9-7 9 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>',
  garage: '<path d="M5 16h14"/><path d="M6 16l1.6-4.5A2 2 0 0 1 9.5 10h5a2 2 0 0 1 1.9 1.5L18 16"/><path d="M4 16v3h2v-1.5h12V19h2v-3"/><circle cx="8" cy="16.8" r=".6"/><circle cx="16" cy="16.8" r=".6"/><path d="M3 9l9-5 9 5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
};
export const icon = (k: string, size = 22, fill = false) =>
  `<svg aria-hidden="true" focusable="false" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${P[k] ?? ''}</svg>`;

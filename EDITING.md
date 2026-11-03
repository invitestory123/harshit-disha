# Customer Editing Guide — wax-seal-royale (Harshit & Disha)

Luxury royal wedding invitation configured for **Harshit & Disha** with interactive wax-seal envelope overlay, breaking seal animation video, swan background video, classical ambient music, live countdown timer, couple & family section, 8-function schedule of events, venues & residence location, family honours & best compliments, and wedding dress code etiquette.

---

## Customer Configuration

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple & Family Information
- `couple.groom`: `"Harshit"`
- `couple.bride`: `"Disha"`
- `couple.groomParents`: `"Mrs. Sandhya Gupta & Mr. Hariom Gupta"`
- `family.groom.grandRelation`: `"Grand S/o Smt. Late Ramvati Devi & Late Shri Shankar Lal Gupta"`
- `family.bride.grandRelation`: `"Grand D/o Smt. Pushplata Varshney & Shri Mahesh Chand Varshney"`
- `family.bride.parentsRelation`: `"D/o Mrs. Kumkum Varshney & Mr. Lokesh Varshney"`

### Wedding Date & Invitation Note
- `wedding.dateLabel`: `"26.11.26"`
- `wedding.longDate`: `"Thursday, 26 November 2026"`
- `wedding.dateISO`: `"2026-11-26T11:00:00+05:30"` (drives live countdown timer & calendar link)
- `wedding.invitationNote`: Cordial invitation note from parents

### Schedule of Events (OG Template Authentic Design)
The schedule block faithfully replicates the original `wax-seal-royale` luxury design:
- Deckled torn parchment edges top (`images/cdn/noroot_12.png`) and bottom (`images/cdn/noroot_1.png`)
- Golden cursive calligraphic heading flanked by flourishes (`images/cdn/left-element_1.png` and `images/cdn/right-element_1.png`)
- Central vertical hairline with rotated diamond markers (`♦`)
- Central sacred vow highlight: Pink rose blossom emblem (`images/cdn/rose_-_Copy.png`) rotated 325°
- Right-aligned Time & Date on the left; Left-aligned Event Name, Venue & Dress Code on the right

1. **Haldi Hungama** — 25 Nov 2026 · 11:00 AM onwards (Mango lawn opp to bar) · Dress: *Pretty in pastels*
2. **Mastani Shaam** — 25 Nov 2026 · 5:00 PM onwards (Mango Courtyard) · Dress: *Glamour Edit*
3. **Jashan - e - Barat** — 26 Nov 2026 · 11:00 AM · Dress: *Timeless Traditionals*
4. **Vivah Sankalp** — 26 Nov 2026 · 12:00 PM onwards (Kosi Deck)
5. **Prem Mala (A varmala ceremony)** — 26 Nov 2026 · 8:00 PM (Kosi Deck - river side lawn)
6. **Jal Mata Celebration** — 26 Nov 2026 · 8:00 PM onwards (The Radha Van, Agra Road, Aligarh)
7. **Gala Celebration** — 26/30 Nov 2026 · 7:30 PM onwards (Rudraksh Lawn)
8. **Pyaar Bhari Vidai** — 1 Dec 2026 · 10:00 AM

### Residence & Venues
- `address.residence`: `14/100 Moti Mill Compound, Achal Tal, Aligarh - 202001`
- `venue.name`: `The Radha Van & Associated Venues`
- `venue.mapsUrl`: Google Maps directions link

### Family Blessings & Honours
- `specialRequest`: List of esteemed family members
- `withWarmRegards`: Mr. Shantanu Gupta (Lavi) — 9548916969
- `withBestCompliments`: List of family members

### Media Assets
- `media.monogram`: Gold circular H&D monogram (`editable/assets/monogram.png`)
- `media.overlayImage`: Wax-seal envelope graphic (`editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png`)
- `media.sealVideo`: Wax-seal breaking/opening MP4 (`editable/assets/1782224012851.mp4`)
- `media.heroVideo`: Ambient background video (`editable/assets/Swans2.mov`)
- `media.audio`: Ambient classical soundtrack (`editable/assets/Einaudi_ Divenire (1) (1).mp3`)

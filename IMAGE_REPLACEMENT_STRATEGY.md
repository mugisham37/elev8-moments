# Image Replacement Strategy - Elev8 Moments

## Available Images Analysis
- **Total numbered images**: 33 (1-35, missing 5)
- **Image extensions**: Mix of .JPG and .jpg
- **Exclusions**: Footer images (14 images) - DO NOT TOUCH
- **Exclusions**: SVG logos - DO NOT USE

## Image Replacement Map

### LANDING PAGE (/)

#### 1. Hero Section (`src/components/Landing/Hero.tsx`)
- **Background (1600x800 landscape)** → Use **Image 28** (wide landscape for background)
- **Main Hero (600x800 portrait)** → Use **Image 1** (tall portrait, main showcase)

#### 2. Charcuterie Offerings (`src/components/Landing/CharcuterieOfferings.tsx`)
- **Main Image (700x900 portrait)** → Use **Image 3** (tall portrait with rounded corner)

#### 3. Fruit Specialty Boards (`src/components/Landing/FruitSpecialtyBoards.tsx`)
- **Main Image (700x500 landscape)** → Use **Image 18** (landscape with rounded corner)
- **Sample 1 (250x200)** → Use **Image 11**
- **Sample 2 (250x200)** → Use **Image 13**
- **Sample 3 (250x200)** → Use **Image 15**

#### 4. Event Design (`src/components/Landing/EventDesign.tsx`)
- **Main Image (500x600 portrait)** → Use **Image 7** (portrait)

#### 5. Board Besties CTA (`src/components/Landing/BoardBestiesCTA.tsx`)
- **Background (1600x400 wide landscape)** → Use **Image 30** (wide background)

#### 6. Gallery Component (`src/components/Layout/Gallery.tsx`)
- **Gallery 1 (600x700)** → Use **Image 2**
- **Gallery 2 (600x700)** → Use **Image 4**
- **Gallery 3 (600x700)** → Use **Image 6**
- **Gallery 4 (600x700)** → Use **Image 8**
- **Gallery 5 (600x700)** → Use **Image 9**
- **Gallery 6 (600x700)** → Use **Image 10**

#### 7. Gallery2 Component (`src/components/Landing/Gallery2.tsx`)
- **Event 1 (600x700)** → Use **Image 12**
- **Event 2 (600x700)** → Use **Image 14**
- **Event 3 (600x700)** → Use **Image 16**

#### 8. Testimonials (`src/components/Layout/Testimonials.tsx`)
- **Customer 1 (240x240 square)** → Use **Image 31** (profile/person)
- **Customer 2 (240x240 square)** → Use **Image 32** (profile/person)

---

### GIFTING PAGE (/gifting)

#### 1. Gifting Hero (`src/components/Routes/Gifting/Hero.tsx`)
- **Background (1600x wide)** → Use **Image 29** (wide background)
- **Main Image (392x479 portrait)** → Use **Image 17** (portrait gift box)

#### 2. How It Works (`src/components/Routes/Gifting/HowItWorks.tsx`)
- **Grid Image 1 (229x229 square)** → Use **Image 19**
- **Grid Image 2 (229x229 square)** → Use **Image 20**
- **Grid Image 3 (229x229 square)** → Use **Image 21**

#### 3. Order Now (`src/components/Routes/Gifting/Ordernow.tsx`)
- **Perfect For 1 (square)** → Use **Image 22**
- **Perfect For 2 (square)** → Use **Image 23**
- **Perfect For 3 (square)** → Use **Image 24**
- **Perfect For 4 (square)** → Use **Image 25**
- **Perfect For 5 (square)** → Use **Image 26**
- **Perfect For 6 (square)** → Use **Image 27**

---

### EXPERIENCES PAGE (/experiences)

#### 1. Grazing Tables Hero (`src/components/Routes/Experiences/GrazingTablesHero.tsx`)
- **Main Image (259x346 portrait)** → KEEP EXTERNAL (specific grazing table)

#### 2. Grazing Details (`src/components/Routes/Experiences/GrazingDetails.tsx`)
- **Detail Image (381x525 portrait)** → KEEP EXTERNAL (specific detail shot)

#### 3. Boards Boxes Grid (`src/components/Routes/Experiences/BoardsBoxesGrid.tsx`)
- **Creative Workshops (248x157)** → KEEP EXTERNAL (specific workshop)
- **Healing Retreats (248x157)** → KEEP EXTERNAL (specific retreat)
- **Corporate Experiences (248x157)** → KEEP EXTERNAL (specific corporate)
- **Visit Rwanda (248x157)** → KEEP EXTERNAL (specific tourism)

---

### EVENT DESIGN PAGE (/event-design)

#### 1. Events Hero (`src/components/Routes/Events/Hero.tsx`)
- **Background (1600x wide)** → KEEP EXTERNAL (specific event background)
- **Large Image (486x541)** → Use **Image 33** (large portrait)
- **Small Image (268x407)** → Use **Image 34** (small portrait)

#### 2. Event Setup (`src/components/Routes/Events/EventSetup.tsx`)
- **Setup Image 1 (339x333)** → Use **Image 35** (square-ish)
- **Setup Image 2 (236x289)** → Use **Image 7** (portrait)
- **Setup Image 3 (339x336)** → Use **Image 8** (square-ish)

#### 3. Floral Design (`src/components/Routes/Events/FloralDesign.tsx`)
- **Design Image 1 (339x333)** → Use **Image 9** (square-ish)
- **Design Image 2 (236x289)** → Use **Image 10** (portrait)
- **Design Image 3 (339x336)** → Use **Image 11** (square-ish)

#### 4. Tablescapes (`src/components/Routes/Events/Tablescapes.tsx`)
- **Tablescape 1 (247x417 portrait)** → Use **Image 12** (tall portrait)
- **Tablescape 2 (247x229)** → Use **Image 13** (landscape-ish)
- **Tablescape 3 (234x229)** → Use **Image 14** (landscape-ish)
- **Tablescape 4 (161x229)** → Use **Image 15** (portrait-ish)

#### 5. Seasonal Decor (`src/components/Routes/Events/SeasonalDecor.tsx`)
- **Decor Image 1 (353x298)** → Use **Image 16** (landscape)
- **Decor Image 2 (429x587 portrait)** → Use **Image 17** (tall portrait)
- **Decor Image 3 (237x250)** → Use **Image 18** (square-ish)

---

### ABOUT PAGE (/about)

#### 1. About Hero (`src/components/Routes/About/HeroSection.tsx`)
- **Background (1600x wide)** → KEEP EXTERNAL (wedding background)
- **Sandra Profile (392x400)** → KEEP EXTERNAL (founder photo)

#### 2. About Charcuterie Offerings (`src/components/Routes/About/CharcuterieOfferings.tsx`)
- **All 4 images** → KEEP EXTERNAL (specific offerings)

#### 3. Love Notes Section (`src/components/Routes/About/LoveNotesSection.tsx`)
- **Both testimonial images** → KEEP EXTERNAL (real customer photos)

---

## Summary
- **Total replacements**: 42 images
- **Kept external**: 16 images (specific content, founder, customers)
- **Footer images**: 14 images (UNTOUCHED)
- **Strategy**: Mix images randomly, prioritize context (portrait/landscape), use all 33 available images

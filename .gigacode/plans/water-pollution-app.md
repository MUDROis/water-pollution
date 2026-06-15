# Water Pollution & Filtration Experiment - Project Plan

## Overview
Interactive web application for teaching water filtration concepts to students aged 12-14 (B1 English level).

## Tech Stack
- **Frontend**: React + Vite, Tailwind CSS, Framer Motion
- **Data**: JSON-based content structure
- **Deployment**: Static site (GitHub Pages / Netlify)

## Timeline
- **Week 1**: Foundation (Project setup, content research, UI/UX design)
- **Week 2**: Core Development (Component development, data structure, basic animations)
- **Week 3**: Interactivity (Drag-and-drop, quiz system, virtual lab)
- **Week 4**: Testing & Polish (User testing, content review, accessibility audit)

---

## Phase 1: Project Setup

### Tasks
1. Initialize Vite + React project
2. Configure Tailwind CSS
3. Set up basic routing with React Router
4. Create project folder structure
5. Setup GitHub repository

### Commands
```bash
npm create vite@latest water-pollution-app -- --template react
cd water-pollution-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion react-router-dom
```

### Folder Structure
```
src/
├── components/     # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── ProgressBar/
│   ├── PollutantCard/
│   ├── FiltrationStep/
│   └── Quiz/
├── pages/          # Application pages
│   ├── Home/
│   ├── PollutionTypes/
│   ├── FiltrationMethods/
│   ├── VirtualLab/
│   └── Quiz/
├── data/           # Content data (JSON)
├── animations/     # Animation definitions
└── App.js          # Main application component
```

---

## Phase 2: Content Development

### Data Files

#### pollutants.json
```json
{
  "pollutants": [
    {
      "id": 1,
      "name": "Plastic Bottle",
      "category": "physical",
      "description": "Non-biodegradable waste that harms aquatic life",
      "image": "plastic-bottle.png"
    },
    {
      "id": 2,
      "name": "Oil",
      "category": "chemical",
      "description": "Petroleum products that pollute water surfaces",
      "image": "oil.png"
    },
    {
      "id": 3,
      "name": "Bacteria",
      "category": "biological",
      "description": "Microorganisms that can cause diseases",
      "image": "bacteria.png"
    }
  ]
}
```

#### filtrationMethods.json
```json
{
  "methods": [
    {
      "id": 1,
      "name": "Sedimentation",
      "description": "Letting heavy particles settle at the bottom",
      "steps": ["Pour water", "Wait for particles to settle", "Pour off clean water"],
      "animation": "sedimentation"
    },
    {
      "id": 2,
      "name": "Filtration",
      "description": "Using sand and charcoal filters to remove impurities",
      "steps": ["Pour through filter", "Impurities trapped", "Clean water collects"],
      "animation": "filtration"
    },
    {
      "id": 3,
      "name": "Disinfection",
      "description": "Killing bacteria with UV light or chlorine",
      "steps": ["Expose to UV light", "Bacteria destroyed", "Water is safe"],
      "animation": "disinfection"
    },
    {
      "id": 4,
      "name": "Distillation",
      "description": "Boiling water and condensing steam",
      "steps": ["Boil water", "Steam rises", "Steam condenses to pure water"],
      "animation": "distillation"
    }
  ]
}
```

#### quizQuestions.json
```json
{
  "questions": [
    {
      "id": 1,
      "question": "What is water pollution?",
      "options": [
        "Clean water with no impurities",
        "Contaminated water that is harmful",
        "Water from the tap"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "question": "Which of these is a physical pollutant?",
      "options": ["Plastic", "Oil", "Bacteria"],
      "correct": 0
    },
    {
      "id": 3,
      "question": "What happens during sedimentation?",
      "options": [
        "Water is boiled",
        "Heavy particles settle down",
        "UV light kills bacteria"
      ],
      "correct": 1
    }
  ]
}
```

---

## Phase 3: Interactive Components

### Component: Pollutant Sorting Game
- Drag-and-drop functionality using react-dnd or HTML5 drag API
- Categories: Physical, Chemical, Biological
- Visual feedback for correct/incorrect placement
- Progress tracking

### Component: Filtration Animation Sequence
- Framer Motion animations for water state changes
- Step-by-step demonstration of each filtration method
- Interactive controls to advance/review steps
- Before/after comparison

### Component: Virtual Lab
- Interactive simulation interface
- Choose pollutant type
- Select filtration method
- Watch process animation
- See clean water result
- Compare before/after states

### Component: Quiz System
- Multiple choice questions
- Instant feedback (correct/incorrect)
- Score tracking
- Review incorrect answers
- Restart option

### Component: Progress Bar
- Visual indicator of current step
- Navigation between completed steps
- Lock/unlock mechanism

---

## Phase 4: Polish & Testing

### UI/UX Improvements
- Smooth transitions between pages
- Loading states for animations
- Responsive design verification
- Accessibility audit (contrast, keyboard navigation)

### Content Review
- Verify B1 English level vocabulary
- Check visual aids compatibility
- Test with sample students
- Collect feedback

### Final Testing
- Cross-browser compatibility
- Mobile/tablet responsiveness
- Performance optimization
- Deployment preparation

---

## Deployment

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json:
"homepage": "https://username.github.io/water-pollution-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Netlify
- Connect repository to Netlify
- Build command: `npm run build`
- Publish directory: `build`

---

## Success Criteria
- ✅ All 7 pages implemented
- ✅ Interactive drag-and-drop sorting works
- ✅ Filtration animations smooth and informative
- ✅ Virtual lab simulation functional
- ✅ Quiz with 5-7 questions and feedback
- ✅ Responsive on tablets and desktops
- ✅ B1 English level content verified
- ✅ Accessibility requirements met

---

## Next Steps
1. Initialize Vite project
2. Create project structure
3. Setup Tailwind CSS
4. Start with Home page component
5. Create data JSON files
6. Implement polling types page with drag-and-drop

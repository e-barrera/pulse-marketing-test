# Code Organization Rules

This skill defines the code organization rules for the project. Follow these rules when creating, refactoring, or moving code.

## Rules

### 1. Constants Location
Anything that is a constant should be under `utils/constants.ts`.

**Examples:**
- Color palettes
- Configuration values
- Static arrays (like month names)
- Magic numbers

### 2. Formatter Methods
Anything that looks like a formatter method goes under `utils/formatter.ts`.

**Examples:**
- Date formatting functions
- Number formatting functions
- String transformation utilities
- Label rendering functions

### 3. Custom Hooks
All custom hooks go under `hooks/`.

**Examples:**
- Data fetching hooks
- State management hooks
- Utility hooks

### 4. Types Organization
All types should go under `types/` folder (create it if it doesn't exist). Any type or interface should go in structured files under `types/`. Check which ones share relation and add them together.

**Suggested structure:**
```
types/
├── index.ts          # Re-export all types
├── chart.ts          # Chart-related types
├── api.ts            # API response types
├── domain.ts         # Domain/entity types
└── common.ts         # Shared/common types
```

### 5. Reusable Components
Any reusable component should go under `components/` folder.

**Examples:**
- UI components (buttons, inputs, cards)
- Chart components
- Layout components
- Feature-specific reusable components

### 6. Single Component Per File
Each component file should only have 1 component defined. If 2 or more components are in the same file:
1. Check if a separate file already exists for the component
2. If not, split it into a separate file
3. Update imports accordingly

**Exceptions:**
- Small helper components that are tightly coupled to the main component (e.g., a custom tooltip used only by one chart)
- Sub-components that are never used outside the parent component

## When to Apply These Rules

- When creating new files
- When refactoring existing code
- When moving code during cleanup
- When reviewing pull requests

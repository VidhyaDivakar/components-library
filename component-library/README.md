# React + TypeScript + Vite

### Reflections

### How did you handle optional props in your components?

I used ? in the props interface to mark optional fields.
Inside the component, I added default values where needed.
I also used conditional rendering so nothing breaks if a prop is missing.

### What considerations did you make when designing the component interfaces?

I focused on keeping props clear and reusable across components.
Only required data is mandatory, everything else is optional for flexibility. I also kept naming simple so it’s easy to understand and use.

### How did you ensure type safety across your components?

I created common types in a central types/index.ts file.
Then I reused those types across all components instead of redefining them. This helped avoid errors and kept everything consistent.

### What challenges did you face when implementing component composition?


Initially I had confusion with props vs children usage. Managing type definitions across components was also tricky at first. Once I structured types and props properly, composition became easier.

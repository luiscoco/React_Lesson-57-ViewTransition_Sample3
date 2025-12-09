# Deep Dive View Transition (React Canary)

Small Vite + React (canary) demo that shows how to pair React state transitions with the built-in `ViewTransition` component.

- Uses React’s `ViewTransition` component around the detail pane so React coordinates the before/after states.
- `startTransition` wraps the random selection to keep updates interruptible and ready for animation.
- Random item selector animates the active badge and detail card.
- Minimal styling to make the transition names (`view-transition-name`) visible.
- Zero dependencies beyond React canary and Vite.

## Quick start

Prerequisites: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite will print a local dev server URL (defaults to `http://localhost:5173`). Open it and click **Randomly select item** to watch the view transition between list selection and detail content.

## Key code

Component that wires it up to a random selection and wraps the detail panel in `ViewTransition`:

```jsx
export default function DeepDiveViewTransition() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function selectRandom() {
    startTransition(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedIndex(randomIndex);
    });
  }

  return (
    <div className="deep-dive-layout">
      <button onClick={selectRandom}>Randomly select item</button>
      <div className="deep-dive-content">
        {/* list */}
        <ViewTransition>
          {/* detail content */}
        </ViewTransition>
      </div>
    </div>
  );
}
```

Styling defines `view-transition-name` hooks so the browser knows what to animate:

```css
/* src/index.css */
.item-list li.active {
  outline: 2px solid #111827;
  view-transition-name: active-item;
}

.details {
  view-transition-name: detail-card;
}
```

## Build and preview

- `npm run build` – production build to `dist/`
- `npm run preview` – serve the built assets locally for a final check

## Project structure

```
src/
  DeepDiveViewTransition.jsx  # Demo component with React ViewTransition
  index.css                   # View transition hooks and layout
  main.jsx                    # React entry point
```

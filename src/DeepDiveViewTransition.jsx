// DeepDiveViewTransition.jsx
import { ViewTransition, startTransition, useState } from 'react';

const items = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

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
      <button onClick={selectRandom}>
        Randomly select item
      </button>
      <div className="deep-dive-content">
        <ul className="item-list">
          {items.map((label, index) => (
            <li
              key={label}
              className={index === selectedIndex ? 'active' : ''}
            >
              {label}
            </li>
          ))}
        </ul>
        <ViewTransition>
          <section className="details">
            <h2>Details for: {items[selectedIndex]}</h2>
            <p>
              When the selection changes, this section animates between old and new
              content using ViewTransition.
            </p>
          </section>
        </ViewTransition>
      </div>
    </div>
  );
}

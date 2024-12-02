import { writable } from 'svelte/store';

function createVideoSettings() {
  const { subscribe, set, update } = writable({
    view: 'grid',
    sortBy: 'original',
    groupByChannel: false
  });

  return {
    subscribe,
    setView: (view) => update(s => ({ ...s, view })),
    setSortBy: (sortBy) => update(s => ({ ...s, sortBy })),
    toggleGroupByChannel: () => update(s => ({ ...s, groupByChannel: !s.groupByChannel })),
    reset: () => set({
      view: 'grid',
      sortBy: 'original',
      groupByChannel: false
    })
  };
}

export const videoSettings = createVideoSettings();
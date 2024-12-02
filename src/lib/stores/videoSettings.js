import { writable } from 'svelte/store';

const defaultSettings = {
  view: 'grid',
  sortBy: 'original',
  groupByChannel: false
};

function createPageVideoSettings() {
  const stores = new Map();

  function getStore(pageId) {
    if (!stores.has(pageId)) {
      stores.set(pageId, writable({ ...defaultSettings }));
    }
    return stores.get(pageId);
  }

  return {
    subscribe(pageId, callback) {
      return getStore(pageId).subscribe(callback);
    },
    setView(pageId, view) {
      getStore(pageId).update(s => ({ ...s, view }));
    },
    setSortBy(pageId, sortBy) {
      getStore(pageId).update(s => ({ ...s, sortBy }));
    },
    toggleGroupByChannel(pageId) {
      getStore(pageId).update(s => ({ ...s, groupByChannel: !s.groupByChannel }));
    },
    reset(pageId) {
      getStore(pageId).set({ ...defaultSettings });
    }
  };
}

export const videoSettings = createPageVideoSettings();
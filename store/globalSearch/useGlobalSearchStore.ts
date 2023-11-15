import { create } from 'zustand'

interface IGlobalSearchStore {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const useGlobalSearchStore = create<IGlobalSearchStore>(set => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query })
}))

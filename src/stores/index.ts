import { create } from 'zustand'

type Store = {
  isVisibleFooterState: boolean
  isMouseHoveredState: boolean
} & {
  setIsVisibleFooterState: (value: boolean) => void
  setIsMouseHoveredState: (value: boolean) => void
}

export const useStore = create<Store>((set) => ({
  isVisibleFooterState: false,
  isMouseHoveredState: false,
  setIsVisibleFooterState: (value) => set({ isVisibleFooterState: value }),
  setIsMouseHoveredState: (value) => set({ isMouseHoveredState: value }),
}))

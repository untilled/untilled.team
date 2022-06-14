import { atom, selector } from 'recoil'

export const pageState = atom<number | null>({
  key: 'pageState',
  default: null,
})

export const isMobileState = atom<boolean | null>({
  key: 'isMobileState',
  default: null,
})

export const isVisibleFooterState = atom<boolean>({
  key: 'isVisibleFooterState',
  default: false,
})

export const isMouseHoveredState = atom<boolean>({
  key: 'isMouseHoveredState',
  default: false,
})

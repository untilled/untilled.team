import { atom } from 'recoil'

export const home = atom<number | null>({
  key: 'page',
  default: 0,
})

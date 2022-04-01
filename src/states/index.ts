import { atom } from 'recoil'

export const home = atom<number>({
  key: 'page',
  default: 0,
})

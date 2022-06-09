import { atom, selector } from 'recoil'

export const pageState = atom<number | null>({
  key: 'pageState',
  default: null,
})

export const isMobileState = atom<boolean | null>({
  key: 'isMobileState',
  default: null,
})

export const isLayoutClosedState = selector({
  key: 'isLayoutClosedState',
  get: ({ get }) => {
    const page = get(pageState)
    const isMobile = get(isMobileState)

    //모바일이 아니면서 home page에서 footer인 경우
    return !isMobile && page === 6
  },
})

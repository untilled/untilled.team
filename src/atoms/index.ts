import { atom } from 'recoil'

//Footer가 보이는지 알려줌
export const isVisibleFooterState = atom<boolean>({
  key: 'isVisibleFooterState',
  default: false,
})

//마우스 hover상태인지 알려줌
export const isMouseHoveredState = atom<boolean>({
  key: 'isMouseHoveredState',
  default: false,
})

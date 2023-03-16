export type PageifyRef = {
  moveNextPage: () => void
  movePrevPage: () => void
  movePage: (page: number) => void
}

export type PageifyProps = {
  defaultPage?: number
  disabled?: boolean
  children: React.ReactNode[]
  onChange?: (page: number) => void
}

import { useEffect, useState } from 'react'

function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const checkIsMobile = () => {
    if (typeof window === 'object') {
      if (window.innerWidth <= 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }

  useEffect(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [isMobile])

  return [isMobile]
}

export default useMobile

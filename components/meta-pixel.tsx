"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect, useState } from "react"

export function MetaPixel() {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!loaded) return

    // fbq is available on window after the script loads
    // @ts-ignore
    window.fbq('track', 'PageView')
    // @ts-ignore
    window.fbq('track', 'ViewContent')
  }, [pathname, loaded])

  return (
    <div>
      <Script
        id="fb-pixel"
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="afterInteractive"
        onLoad={() => {
          setLoaded(true)
          // @ts-ignore
          window.fbq = window.fbq || function() { (window.fbq.q = window.fbq.q || []).push(arguments) };
          // @ts-ignore
          window.fbq.version = '2.0';
          // @ts-ignore
          window.fbq('init', '835487246001840');
          // @ts-ignore
          window.fbq('track', 'PageView');
          // @ts-ignore
          window.fbq('track', 'ViewContent');
        }}
      />
    </div>
  )
}

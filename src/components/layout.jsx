import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import MessengerChat from "./MessengerChat"


export function Layout({ children }) {
  return (
    <div>
      <Seo />
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <MessengerChat />
      <Footer />
    </div>
  )
}

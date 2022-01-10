import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
      </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://www.facebook.com/fasttechferizaj">
              Facebook
            </a>
          </li>
          <li className={footerNavListItem}>
            <a href="https://www.instagram.com/fasttechferizaj/">Instagram</a>
          </li>
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved.  <a href="https://www.pixendrit.com/">
              Pixendrit
            </a>
      </div>
    </footer>
  )
}

import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.css"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>Faqja nuk u gjet</h1>
        <p className={paragraph}>
          Nuk ka faqe me këto specifika.
        </p>
      </div>
    </Layout>
  )
}

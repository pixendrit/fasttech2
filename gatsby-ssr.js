import * as React from "react"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import MessengerChat from "./src/components/MessengerChat"


export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <MessengerChat />
  </>
);

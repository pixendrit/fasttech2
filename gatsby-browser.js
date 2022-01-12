import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import MessengerChat from "./src/components/MessengerChat"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
  
)
export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <MessengerChat />
  </>
);

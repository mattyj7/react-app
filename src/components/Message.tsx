import React from 'react'
import { ReactNode } from "react"

const name = 'Bob';
interface Props {
    children: ReactNode;
}

const Message = ({ children }: Props) => {
    return (
      <h1 className="message"> { children } {name}</h1>
    )
  }


export default Message;
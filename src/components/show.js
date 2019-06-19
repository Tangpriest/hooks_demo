import React from 'react'
import { GlobalContext } from '../store'

export default function ShowComponent() {
  const store = React.useContext(GlobalContext)
  return (
    <div>
      <h1>{store.appName}</h1>
    </div>
  )
}
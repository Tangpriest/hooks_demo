import React from 'react'
import { GlobalContext } from '../store'

export default function ButtonComponent() {
  const store = React.useContext(GlobalContext)
  return (
    <div>
      这个是button组件,点击按钮将react-redux 变成react-hooks
      <button onClick={()=>{store.setAppName('react-hooks')}}>切换</button>
    </div>
  )
}
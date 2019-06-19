import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalProvider, GlobalContext } from './store'


import ButtonComponent from './components/button'
import ShowComponent from './components/show'

const App = function (){
  const [title,setTitle] = React.useState('react-redux')
  return (
    <div onClick={()=>{setTitle('react-hooks')}}>
      <ButtonComponent />
      <ShowComponent />
    </div>
  )
}

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
  , document.getElementById('root'))


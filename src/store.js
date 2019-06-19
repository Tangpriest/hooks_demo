import React from 'react'

export const GlobalContext = React.createContext({})

export function GlobalProvider(props) {
  const [appName, setAppName] = React.useState('react-redux')
  return (
    <GlobalContext.Provider
      value={{
        appName,
        setAppName
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
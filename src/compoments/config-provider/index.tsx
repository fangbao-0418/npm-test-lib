import React from 'react'

import {
  ConfigContext,
} from './context';

export {
  ConfigContext
}

export interface ConfigProviderProps {}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  return (
    <ConfigContext.Provider
      value={{}}
    >
      {props.children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
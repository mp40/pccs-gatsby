import * as React from 'react'
import Sidebar from '../sidebar'
import {container} from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Sidebar>
        {children}
        </Sidebar>
    </div>
  )
}
export default Layout
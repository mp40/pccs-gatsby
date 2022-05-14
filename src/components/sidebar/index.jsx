import * as React from 'react'
import { Link } from 'gatsby'
import {container} from './container.module.css'

const Sidebar = ({children}) => {
  return (
    <div className={container}>
        <div>
        {/* <Link to="https://pccs.herokuapp.com/">PCCS Helper</Link>
        <Link to="https://pccs.herokuapp.com/">PCCS Helper</Link>
        <Link to="https://pccs.herokuapp.com/">PCCS Helper</Link> */}
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
export default Sidebar
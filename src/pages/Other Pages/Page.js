import React from 'react'
import { useParams} from 'react-router-dom'
import './style.css'
const Page = () => {
  React.useEffect(() => {
    window.scroll(0,0)
}, [])
    const {page}=(useParams())
    return (
        <div className="other-pages">
          <h2>This is {page} page</h2>
        </div>
    )
}

export default Page

import Header from 'components/Header'
import Banner from 'components/Banner'
import { useEffect, useState, useRef } from 'react'

export default function Login () {
  const [header, setHeader] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeader(ref.current.clientHeight)
  })

  return (
    <div className="login">
      <div className="login__content">
        <div ref={ref}>
          <Header></Header>
        </div>
        <Banner header={header} ></Banner>
      </div>
    </div>
  )
}

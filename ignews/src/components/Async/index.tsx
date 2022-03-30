import { useEffect, useState } from "react"

export function Async (): JSX.Element {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
    }, 1000)
  }, [])
  return <>
    <h1>Hello world</h1>
    { isButtonVisible && <button>Button</button>}
  </>
}
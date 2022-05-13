/** @jsx jsx */
import { jsx, Link, Text } from 'theme-ui'
import { useState } from 'react'

const HoverableLink: React.FunctionComponent<any> = () => {
  const copyrightText = (
    <Text>
      &copy; {new Date().getFullYear()} Community International Ltd.
    </Text>
  )

  const madeByText = (
    <Text>
      Created by: <Link aria-label='Link to the creator of the website' href='https://www.gaborkristof.com'>Kristóf Gábor</Link>
    </Text>
  )

  const [data, setData] = useState(copyrightText)
  const handleMouseEnter = (): void => { setData(madeByText) }
  const handelMouseLeave = (): void => { setData(copyrightText) }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handelMouseLeave}>
      {data}
    </div>
  )
}

export default HoverableLink

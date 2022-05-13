/** @jsx jsx */
import Navigation from '@lekoarts/gatsby-theme-jodie/src/components/navigation'
import useJodieConfig from '@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config'
import useSiteMetadata from '@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata'
import { Link } from 'gatsby'
import { readableColor } from 'polished'
import { get, jsx } from 'theme-ui'
import Logo from '../icons/logo'
import LogoSmall from '../icons/logo-small'
import isMobile from '../utils/isMobile'

interface SidebarProps { bg: string }

const Sidebar: React.FunctionComponent<any> = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useJodieConfig()

  bg = '#E2007A'

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t) => ['100%', '100%', '100%', get(t, 'sidebar.normal'), get(t, 'sidebar.wide')],
        backgroundColor: bg,
        position: ['relative', 'relative', 'relative', 'fixed'],
        height: '100%',
        display: 'flex',
        flexDirection: ['row', 'row', 'row', 'column'],
        alignItems: ['center', 'center', 'center', 'flex-start'],
        justifyContent: ['space-between', 'space-between', 'space-between', 'flex-start'],
        svg: {
          fill: readableColor(bg),
          transition: 'all 0.3s ease-in-out',
          '&:hover, &:focus': {
            fill: 'primaryLight'
          }
        },
        variant: 'sidebar'
      }}
      data-testid='sidebar'
    >
      <Link to={basePath} aria-label={`${siteTitle}, Back to Home`} sx={{ width: ['6.5rem', '6.5rem', '8rem', '10rem'] }}>
        { isMobile() ? <LogoSmall/> : <Logo/> }
      </Link>
      <div sx={{ py: 4, display: ['none', 'none', 'none', 'block'] }} />
      <Navigation bg={bg} />
    </header>
  )
}

export default Sidebar

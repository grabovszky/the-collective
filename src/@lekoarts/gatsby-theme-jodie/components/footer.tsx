/** @jsx jsx */
import { jsx, useThemeUI, get } from 'theme-ui'
import { readableColor } from 'polished'
import HoverableLink from './hoverable-link'

const Footer: React.FunctionComponent<any> = ({ bg }: { bg: string }) => {
  const {
    theme: { rawColors }
  } = useThemeUI()

  bg = '#E2007A'

  const text = readableColor(
    bg,
    rawColors?.textMuted as string | undefined,
    rawColors?.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: ['relative', 'relative', 'relative', 'fixed'],
        width: (t) => ['100%', '100%', '100%', get(t, 'sidebar.normal'), get(t, 'sidebar.wide')],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          '&:hover,&:focus': {
            color: readableColor(bg, 'primary', 'primaryLight', false)
          }
        },
        variant: 'footer'
      }}
    >
      <HoverableLink />
    </footer>
  )
}

export default Footer

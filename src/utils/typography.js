import Typography from 'typography'
// import theme from "typography-theme-fairy-gates"
import theme from "typography-theme-kirkham"

theme.overrideThemeStyles = () => ({
  'li': {
    marginBottom: 0,
  },
})
const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

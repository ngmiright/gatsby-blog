import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.baseFontSize = "16px"
// to use color from gastby-plugin-theme-ui instead of lincolnTheme
lincolnTheme.headerColor = ""
lincolnTheme.bodyColor = ""
lincolnTheme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {textShadow: "none", backgroundImage: "none"},
    blockquote: {color: ""},
})

const typography = new Typography({
    ...lincolnTheme,
})

export default typography


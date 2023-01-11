// from https://github.com/enmity-mod/enmity/tree/main/src/cwindore/screens/partials

import { SVG, StyleSheet, ColorMap, React } from 'enmity/metro/common';
const { ThemeColorMap } = ColorMap;

export function PluginIcon({ height, width, ...rest }) {
  const styles = StyleSheet.createThemedStyleSheet({
    icon: {
      color: ThemeColorMap.INTERACTIVE_NORMAL,
      opacity: 0.75,
      marginLeft: 0.5
    }
  });

  return <SVG.Svg viewBox='0 0 24 24' style={{ height, width, ...styles.icon }} fill='currentColor' {...rest}>
    <SVG.Path d='M0 0h24v24H0z' fill='none' />
    <SVG.Path d='M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z' />
  </SVG.Svg>;
}


export function ThemeIcon({ height, width, ...rest }) {
  const styles = StyleSheet.createThemedStyleSheet({
    icon: {
      color: ThemeColorMap.INTERACTIVE_NORMAL,
      opacity: 0.75,
      marginLeft: 0.5
    }
  });

  return <SVG.Svg viewBox='0 0 24 24' style={{ height, width, ...styles.icon }} fill='currentColor' {...rest}>
    <SVG.Path d='M0 0h24v24H0z' fill='none' />
    <SVG.Path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
  </SVG.Svg>;
}
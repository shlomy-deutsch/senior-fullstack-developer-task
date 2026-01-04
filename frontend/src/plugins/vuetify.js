import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export const vuetify = createVuetify({
  components,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#48b75b',
          'black-on-background': '#464b51',
        },
      },
    },
  },
})

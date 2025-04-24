import type { Preview } from "@storybook/react"
import { ThemeProvider } from "@/components/theme/theme-provider"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="p-6">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
}

export default preview

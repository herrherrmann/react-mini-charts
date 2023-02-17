const { addDecorator } = require('@storybook/react')
const { jsxDecorator } = require('storybook-addon-jsx')

addDecorator(jsxDecorator)

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

# React mini charts

A collection of tiny chart components for React projects. Written with TypeScript and CSS modules.

## Usage

### BarChart

![A bar chart with three items](./screenshots/BarChart.jpg)

```tsx
import BarChart from 'react-mini-charts'

<BarChart
	items={[
		{
			barWidth: '10%',
			barColor: '#adfc92',
			labelLeft: 'Something good',
			labelRight: '10%',
		},
		{
			barWidth: '50%',
			barColor: '#4a0d67',
			labelLeft: 'Something mediocre',
			labelRight: '50%',
		},
		{
			barWidth: '40%',
			barColor: '#db3069',
			labelLeft: 'Something bad',
			labelRight: '40%',
		},
	]}
/>
```

### Customization

- General styles like font-family are inherited from the surrounding CSS context.
- Specific chart styles can be overridden with `className` props.


## Development

1. Install dependencies with `npm install`
2. Start editing and preview your changes in Storybook with `npm run storybook`

### Building & publishing

1. Build the project to generate the output in `/dist` via `npm run build`
2. Bump the version in `package.json`
3. Re-run `npm install` to update the version in `package-lock.json`
4. Update the `CHANGELOG.md`
5. Publish to npm via `npm publish` (you might need to log in first)

### Other commands

```shell
# Format all files according to Prettier config:
npm run format

# Run all tests:
npm test
```

## Contributions & feedback

This is a spare-time project by one person, but feel free to leave comments and suggestions in the issues tab!

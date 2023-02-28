import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import BarChart from '.'
import styles from './styles-stories.module.css'
import { BarChartItem } from './types'

type Props = React.ComponentPropsWithoutRef<typeof BarChart>

export default {
	title: BarChart.name,
	component: BarChart,
} as Meta<Props>

const Template: Story<Props> = (args) => <BarChart {...args} />

const exampleChartItems: BarChartItem[] = [
	{
		barWidth: '10%',
		barColor: '#adfc92',
		labels: {
			left: { text: 'Something good' },
			right: { text: '10%' },
		},
	},
	{
		barWidth: '50%',
		barColor: '#4a0d67',
		labels: {
			left: { text: 'Something mediocre' },
			right: { text: '50%' },
		},
	},
	{
		barWidth: '40%',
		barColor: '#db3069',
		labels: {
			left: { text: 'Something bad' },
			right: { text: '40%' },
		},
	},
]

export const Default = Template.bind({})
Default.args = {
	items: exampleChartItems,
}

export const CustomStyles = Template.bind({})
CustomStyles.args = {
	items: exampleChartItems,
	className: styles.customStyles,
}

export const NoLabels = Template.bind({})
NoLabels.args = {
	items: [
		{ barWidth: '10%', barColor: '#adfc92' },
		{ barWidth: '50%', barColor: '#4a0d67' },
		{ barWidth: '40%', barColor: '#db3069' },
	],
}

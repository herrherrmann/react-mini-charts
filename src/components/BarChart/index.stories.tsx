import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import BarChart from '.'

type Props = React.ComponentPropsWithoutRef<typeof BarChart>

export default {
	title: 'BarChart',
	component: BarChart,
} as Meta<Props>

const Template: Story<Props> = (args) => <BarChart {...args} />

const exampleChartItems = [
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
]

export const Default = Template.bind({})
Default.args = {
	chartItems: exampleChartItems,
}

export const CustomGap = Template.bind({})
CustomGap.args = {
	chartItems: exampleChartItems,
	gap: 30,
}

import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import PieChart from '.'
import styles from './styles-stories.module.css'

type Props = React.ComponentPropsWithoutRef<typeof PieChart>

export default {
	title: PieChart.name,
	component: PieChart,
} as Meta<Props>

const Template: Story<Props> = (args) => <PieChart {...args} />

const exampleItems = [
	{ percentage: 0.37, color: '#4a0d67' },
	{ percentage: 0.21, color: '#db3069' },
	{ percentage: 0.13, color: '#adfc92' },
]

export const Default = Template.bind({})
Default.args = {
	size: 240,
	items: exampleItems,
}

export const CustomStyles = Template.bind({})
CustomStyles.args = {
	size: 240,
	items: exampleItems,
	backgroundColor: '#fff',
	className: styles.customStyles,
}

export const Empty = Template.bind({})
Empty.args = {
	size: 240,
	items: [],
}

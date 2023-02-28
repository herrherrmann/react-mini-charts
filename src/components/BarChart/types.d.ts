import { ReactNode } from 'react'
import { Color } from '../../common/types'

type BarChartItemLabel = {
	text: ReactNode
	color?: Color
}

type BarChartItemLabels = {
	left?: BarChartItemLabel
	right?: BarChartItemLabel
}

export type BarChartItem = {
	barWidth: string | number
	barColor: Color
	labels?: BarChartItemLabels
}

export type BarProps = {
	barWidth: string | number
	barColor: Color
}

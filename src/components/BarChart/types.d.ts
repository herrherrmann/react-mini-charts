import { ReactNode } from 'react'
import { Color } from '../../common/types'

export type BarChartItem = {
	barWidth: string | number
	barColor: Color
	labelLeft?: ReactNode
	labelRight?: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
}

export type BarProps = {
	barWidth: string | number
	barColor: Color
}

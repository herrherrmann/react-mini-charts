import { ReactNode } from 'react'
import { Color } from '../../common/types'

export type ChartItem = {
	barWidth: string | number
	barColor: Color
	labelLeft?: ReactNode
	labelRight?: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
}

export type BarProps = {
	barColor: Color
	barWidth: string | number
}

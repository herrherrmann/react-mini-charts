import { chartBarBorderRadius, chartBarSize } from '../../../common/constants'
import { Color } from '../../../common/types'

export type BarProps = {
	barColor: Color
	barWidth: string | number
}

export default function Bar(props: BarProps) {
	return (
		<div
			style={{
				backgroundColor: props.barColor,
				width: props.barWidth,
				height: chartBarSize,
				borderRadius: chartBarBorderRadius,
			}}
		/>
	)
}

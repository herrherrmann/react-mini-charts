import { chartBarBorderRadius, chartBarSize } from '../../../common/constants'
import { BarProps } from '../types'

export default function Bar(props: BarProps) {
	return (
		<div
			aria-roledescription="bar"
			style={{
				backgroundColor: props.barColor,
				width: props.barWidth,
				height: chartBarSize,
				borderRadius: chartBarBorderRadius,
			}}
		/>
	)
}

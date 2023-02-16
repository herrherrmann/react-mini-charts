import { PieChartItem } from '../types'
import styles from './styles.module.css'

type Props = PieChartItem & {
	offsetPercentage: number
	radius: number
}

export default function Item({ offsetPercentage, percentage, color, radius }: Props) {
	const circumference = Math.PI * radius
	return (
		<circle
			r={radius / 2}
			cx={radius}
			cy={radius}
			stroke={color}
			strokeWidth={radius}
			strokeDasharray={`${circumference * percentage}, ${circumference}`}
			strokeDashoffset={-circumference * offsetPercentage}
			fill="none"
			className={styles.item}
		/>
	)
}

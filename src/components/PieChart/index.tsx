import { Color } from '../../common/types'
import { getClassNames } from '../../services/classNames'
import Item from './Item'
import styles from './styles.module.css'
import { PieChartItem } from './types'

type Props = {
	items: PieChartItem[]
	/** Width and height of the chart. */
	size: number
	/** Additional className for the chart container. */
	className?: string
	/** Color for the empty background of the chart (the "plate" of the pie). */
	backgroundColor?: Color
}

export default function PieChart({ items, size = 200, className, backgroundColor = '#efefef' }: Props) {
	const radius = size / 2
	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			className={getClassNames([styles.chart, className])}
			role="graphics-document"
			aria-roledescription="chart"
		>
			{!!backgroundColor && (
				<Item radius={radius} offsetPercentage={0.0} percentage={1.0} color={backgroundColor} />
			)}
			{items.map((chartItem, index) => {
				const previousItems = items.slice(0, index)
				const offsetPercentage = previousItems.reduce((prev, current) => prev + current.percentage, 0)
				return (
					<Item
						key={index}
						radius={radius}
						offsetPercentage={offsetPercentage}
						percentage={chartItem.percentage}
						color={chartItem.color}
					/>
				)
			})}
		</svg>
	)
}

import { getClassNames } from '../../services/classNames'
import Item from './Item'
import styles from './styles.module.css'
import { ChartItem } from './types'

type Props = {
	items: ChartItem[]
	/** Additional className for the chart container. */
	className?: string
}

export default function BarChart({ items, className }: Props) {
	return (
		<div className={getClassNames([styles.chart, className])} role="graphics-document" aria-roledescription="chart">
			{items.map((chartItem, index) => (
				<Item
					key={index}
					barWidth={chartItem.barWidth}
					barColor={chartItem.barColor}
					labelLeft={chartItem.labelLeft}
					labelRight={chartItem.labelRight}
					labelLeftColor={chartItem.labelLeftColor || 'black'}
					labelRightColor={chartItem.labelRightColor || 'gray800'}
				/>
			))}
		</div>
	)
}

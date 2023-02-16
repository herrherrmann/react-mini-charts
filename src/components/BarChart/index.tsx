import { ReactNode } from 'react'
import { Color } from '../../common/types'
import { getClassNames } from '../../services/classNames'
import Item from './Item'
import styles from './styles.module.css'

export type ChartItem = {
	barWidth: string | number
	barColor: Color
	labelLeft?: ReactNode
	labelRight?: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
}

type Props = {
	chartItems: ChartItem[]
	/** CSS gap value, e.g. 15 or "15px". */
	gap?: string | number
	/** Additional className for the chart container. */
	className?: string
}

export default function BarChart({ chartItems, gap = '15px', className }: Props) {
	return (
		<div
			className={getClassNames([styles.chart, className])}
			style={{ gap }}
			role="graphics-document"
			aria-roledescription="chart"
		>
			{chartItems.map((chartItem, index) => (
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

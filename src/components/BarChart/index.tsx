import { ReactNode } from 'react'
import { Color } from '../../common/types'
import Item from './Item'

export type ChartItem = {
	barWidth: string | number
	barColor: Color
	labelLeft: ReactNode
	labelRight: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
}

type Props = {
	chartItems: ChartItem[]
}

export default function BarChart({ chartItems }: Props) {
	return (
		<>
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
		</>
	)
}

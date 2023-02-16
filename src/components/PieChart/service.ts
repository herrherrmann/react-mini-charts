import { PieChartItem } from './types'

export function getOffsetPercentages(items: PieChartItem[]): number[] {
	return items.map((_item, index) => {
		const previousItems = items.slice(0, index)
		const offsetPercentage = previousItems.reduce((prev, current) => prev + current.percentage, 0)
		return offsetPercentage
	})
}

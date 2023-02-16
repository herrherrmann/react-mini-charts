import { Color } from '../../common/types'

export type PieChartItem = {
	/** Percentage between 0.0 and 1.0. */
	percentage: number
	/** Color of the pie slice. */
	color: Color
}

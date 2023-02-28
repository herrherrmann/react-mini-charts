import { BarChartItem } from '../types'
import Bar from './Bar'
import Label from './Label'
import styles from './styles.module.css'

type Props = BarChartItem

export default function Item(props: Props) {
	const { barColor, barWidth, labels } = props
	return (
		<div className={styles.item}>
			<Bar barColor={barColor} barWidth={barWidth} />
			{labels && (
				<div className={styles.labels}>
					{labels?.left && <Label color={labels.left.color}>{labels.left.text}</Label>}
					{labels?.right && <Label color={labels.right.color}>{labels.right.text}</Label>}
				</div>
			)}
		</div>
	)
}

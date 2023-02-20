import { ReactNode } from 'react'
import { Color } from '../../../common/types'
import { BarProps } from '../types'
import Bar from './Bar'
import Label from './Label'
import styles from './styles.module.css'

type Props = BarProps & {
	labelLeft?: ReactNode
	labelRight?: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
}

export default function Item(props: Props) {
	const { barColor, barWidth, labelLeft, labelRight, labelLeftColor, labelRightColor } = props
	return (
		<div className={styles.item}>
			<Bar barColor={barColor} barWidth={barWidth} />
			{(labelLeft || labelRight) && (
				<div className={styles.labels}>
					{labelLeft && <Label color={labelLeftColor}>{labelLeft}</Label>}
					{labelRight && <Label color={labelRightColor}>{labelRight}</Label>}
				</div>
			)}
		</div>
	)
}

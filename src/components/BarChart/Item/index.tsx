import { ReactNode } from 'react'
import { Color } from '../../../common/types'
import Spacer from '../../Spacer'
import Bar, { BarProps } from '../Bar'
import styles from './styles.module.css'

type ItemProps = BarProps & {
	labelLeft: ReactNode
	labelRight: ReactNode
	labelLeftColor: Color
	labelRightColor: Color
}

export default function Item({
	barColor,
	barWidth,
	labelLeft,
	labelRight,
	labelLeftColor,
	labelRightColor,
}: ItemProps) {
	return (
		<div className={styles.itemContainer}>
			<Bar barColor={barColor} barWidth={barWidth} />
			<Spacer size={6} />
			<div className={styles.details}>
				<strong className={styles.label} style={{ color: labelLeftColor }}>
					{labelLeft}
				</strong>
				<strong className={styles.label} style={{ color: labelRightColor }}>
					{labelRight}
				</strong>
			</div>
		</div>
	)
}

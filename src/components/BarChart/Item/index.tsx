import { ReactNode } from 'react'
import { Color } from '../../../common/types'
import Spacer from '../../Spacer'
import Bar, { BarProps } from '../Bar'
import styles from './styles.module.css'

type LabelProps = {
	children: ReactNode
	color?: Color
}

function Label({ children, color }: LabelProps) {
	return (
		<strong className={styles.label} style={{ color }}>
			{children}
		</strong>
	)
}

type ItemProps = BarProps & {
	labelLeft?: ReactNode
	labelRight?: ReactNode
	labelLeftColor?: Color
	labelRightColor?: Color
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
			<div className={styles.labels}>
				{labelLeft && <Label color={labelLeftColor}>{labelLeft}</Label>}
				{labelRight && <Label color={labelRightColor}>{labelRight}</Label>}
			</div>
		</div>
	)
}

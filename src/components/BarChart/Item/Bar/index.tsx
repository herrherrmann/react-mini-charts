import { BarProps } from '../../types'
import styles from './styles.module.css'

export default function Bar(props: BarProps) {
	return (
		<div
			aria-roledescription="bar"
			className={styles.bar}
			style={{
				width: props.barWidth,
				backgroundColor: props.barColor,
			}}
		/>
	)
}

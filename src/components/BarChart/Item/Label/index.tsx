import { ReactNode } from 'react'
import { Color } from '../../../../common/types'
import styles from './styles.module.css'

type Props = {
	children: ReactNode
	color?: Color
}

export default function Label({ children, color }: Props) {
	return (
		<strong className={styles.label} style={{ color }}>
			{children}
		</strong>
	)
}

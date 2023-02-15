type Props = {
	size: number
}

export default function Spacer(props: Props) {
	return (
		<div
			aria-hidden="true"
			style={{
				width: props.size,
				height: props.size,
			}}
		/>
	)
}

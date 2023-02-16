export function getClassNames(classNames: (string | undefined)[]) {
	return classNames.filter(Boolean).join(' ')
}

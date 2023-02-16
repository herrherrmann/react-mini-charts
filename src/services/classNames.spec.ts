import { getClassNames } from './classNames'

describe(getClassNames.name, () => {
	test('properly joins two classNames', () => {
		const actual = getClassNames(['some-class', 'another-class'])
		const expected = 'some-class another-class'
		expect(actual).toBe(expected)
	})
	test('ignores undefined classNames', () => {
		const actual = getClassNames(['some-class', undefined])
		const expected = 'some-class'
		expect(actual).toBe(expected)
	})
})

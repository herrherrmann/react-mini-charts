import { getOffsetPercentages } from './service'

describe(getOffsetPercentages.name, () => {
	test('calculates the correct offsets', () => {
		const actual = getOffsetPercentages([
			{ color: 'red', percentage: 0.5 },
			{ color: 'red', percentage: 0.45 },
			{ color: 'red', percentage: 0.05 },
		])
		const expected = [0, 0.5, 0.95]
		expect(actual).toEqual(expected)
	})
})

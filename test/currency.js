import assert from "assert"

import Currency from "../index.js"

describe("Cell", () => {

	it("rate", async () => {
		const rate = await Currency.rate("EUR", "USD")
		assert.deepEqual(rate, {
			from: "EUR",
			to: "USD",
			rate: rate.rate,
			date: rate.date
		})
		assert.ok(!isNaN(new Date(rate.date).valueOf()))
		assert.ok(!isNaN(rate.rate))
	})

	it("convert", async () => {
		const rate = 	1.1460329999999999
		assert.strictEqual(Currency.convert(rate, 1), rate)
		assert.strictEqual(Currency.convert(rate, 2), 2.2920659999999997)
	})

})

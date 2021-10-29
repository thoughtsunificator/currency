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
		const rate = await Currency.convert("EUR", "USD", 20)
		assert.deepEqual(rate, {
			from: "EUR",
			to: "USD",
			value: 20,
			result: rate.result,
			date: rate.date
		})
		assert.ok(!isNaN(new Date(rate.date).valueOf()))
		assert.ok(!isNaN(rate.value))
	})

})

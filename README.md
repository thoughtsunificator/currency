# currency

Currency library for converting currency pairs and getting exchange rates.

This is a Fetch abstraction for [free-exchange-rates-api](https://github.com/thoughtsunificator/free-exchange-rates-api). 

## Getting started

### Installing

`npm install @thoughtsunificator/currency`

## Usage

```javascript
import Currency from "@thoughtsunificator/currency"

const rate = await Currency.rate("USD", "EUR")
const value = await Currency.convert("USD", "EUR", 250)

```

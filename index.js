import fetch from "node-fetch"

/**
 * @global
 */
class Currency {

	/**
	 * @param   {string} from
	 * @param   {string} to
	 */
	static async rate(from, to) {
		const response = await fetch(`https://free-exchange-rates-api.herokuapp.com/${from}/${to}`)
		const json = await response.json()
		if(json.error) {
			throw new Error(json.reason)
		} else {
			return json
		}
	}

	/**
	 * @param   {string} from
	 * @param   {string} to
	 * @param   {number} value
	 */
	static async convert(from, to, value) {
		const response = await fetch(`https://free-exchange-rates-api.herokuapp.com/${from}/${to}/${value}`)
		const json = await response.json()
		if(json.error) {
			throw new Error(json.reason)
		} else {
			return json
		}
	}

}

export default Currency


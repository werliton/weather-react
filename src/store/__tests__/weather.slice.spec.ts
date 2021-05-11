import store from ".."
import { fetchCityById } from "../weather.slice"

describe('Weather Slice', () => {
    it('should valid initialValue', () => {
        let state = store.getState().weathers

        const results = state.weatherResults?.results

        expect(results).toBeUndefined()

        store.dispatch(fetchCityById('24'))

    })
})
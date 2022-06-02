import { ALL_CURRENCIES_URL, BASE_CURRENCY_CONVERTER_URL } from '../../constants/api'

let headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Accept', 'application/json')

const requestOptions = {
  headers: headers,
}

export const fetchCurrencyList = () => {
  return getFetch(ALL_CURRENCIES_URL).then((response) => response.data)
}

export const fetchConversionRate = (conversionId) => {
  const url = `${BASE_CURRENCY_CONVERTER_URL}?currency=${conversionId}`
  return conversionId ? getFetch(url).then((response) => response.data) : null
}

export const getFetch = (url) => {
  return fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('failed to fetch')
      }
    })
    .catch(() => {
      console.log('failed to fetch')
    })
}

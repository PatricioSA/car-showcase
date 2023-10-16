export const updateSearchParams = (type, value) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}

export const generateCarImageUrl = (car, angle) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make, year, model} = car

    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50
    const kilometerFactor = 0.1
    const yearFactor = 0.05

    const mileageRate = (city_mpg * 0.425) * kilometerFactor
    const ageRate = (new Date().getFullYear() - year) * yearFactor

    const rentalRatePerDay = basePricePerDay + ageRate + mileageRate

    return rentalRatePerDay.toFixed(0)
}
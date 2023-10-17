export async function fetchCars(filters) {
    const {manufacturer, model, year, fuel, limit} = filters

    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST,
    }

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&
        &model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
        { headers: headers }
    )

    const result = await response.json()

    return result
}
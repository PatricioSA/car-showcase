export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '933bf5a9e6msh5e397173e24263dp1097e2jsn881dbe9ca214',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        { headers: headers }
    )

    const result = await response.json()

    return result
}
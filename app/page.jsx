import { CarCard, CustomFilter, HeroSection, SearchBar, ShowMoreButton } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/apiCars'

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
  })

  //coverts miles per gallon to kilometers per liter
  allCars.forEach((item) => {
    item.city_mpg *= 0.425.toFixed(2)
    item.combination_mpg *= 0.425.toFixed(2)
    item.highway_mpg *= 0.425.toFixed(2)
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <section className='mt-12 padding-x padding-y
      max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Catálogo de Carros
          </h1>
          <p>Explore os carros que você gostaria de ter</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car}/>
              ))}
            </div>

            <ShowMoreButton
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Ops, sem resultados
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </section>
    </main>
  )
}

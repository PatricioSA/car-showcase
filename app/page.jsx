import { CustomFilter, HeroSection, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <section className='mt-12 padding-x padding-y
      max-width' id='discover'>
        <div>
          <h1>Catálogo de Carros</h1>
          <p>Explore os carros que você gostaria de ter</p>
        </div>

        <div>
          <SearchBar/>

          <div>
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
      </section>
    </main>
  )
}

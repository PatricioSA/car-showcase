"use client"

import { manufacturers } from '@/constants'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
    const [query, setQuery] = useState('')

    const filteredManufactures = query === ''
        ? manufacturers
        : manufacturers.filter((item) => (
            item.toLowerCase() //Volkswagen => volkswagen
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='Car logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className='search-manufacturer__input'
                        placeholder='Volkswagen'
                        displayValue={(manufacturer) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave='trasition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredManufactures.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({active}) => `relative
                                    search-manufacturer__option ${active ?
                                    'bg-my-orange text-white' : 
                                    'text-gray-900'}`}
                                    value={item}
                                >
                                    {item}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
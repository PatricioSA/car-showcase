"use client"

import { updateSearchParams } from "@/utils"
import { Listbox } from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const CustomFilter = ({ title, options }) => {
    const [selected, setSelected] = useState(options[0])
    const router = useRouter()

    const handleUpdateParams = (e) => {
        const newPathName = updateSearchParams(title, e.value.toLowerCase())

        router.push(newPathName)
    }

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e)
                    handleUpdateParams(e)
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className='custom-filter__btn'>
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src='/chevron-up-down.svg'
                            alt="chevron up down"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"
                        />
                    </Listbox.Button>
                    <Listbox.Options className='custom-filter__options'>
                        {options.map((option) => (
                            <Listbox.Option
                                key={option.title}
                                value={option}
                                className={({ active }) => `relative cursor-default
                                select-none py-2 px-4 ${active ?
                                        'bg-my-orange text-white' :
                                        'text-gray-900'}`}
                            >
                                <span className="block truncate">
                                    {option.title}
                                </span>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter
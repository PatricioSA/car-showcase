"use client"

import { calculateCarRent } from "@/utils"
import Image from "next/image"
import { CarDetails, CustomButton } from "."
import { useState } from "react"

export default function CarCard({ car }) {
    const { city_mpg, drive, make, model, transmission, year } = car

    const [isOpen, setIsOpen] = useState(false)

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    R$
                </span>
                <span>
                    {carRent}
                </span>
                <span className="self-end text-[14px] font-medium">
                    /dia
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src='/hero.png'
                    alt="Modelo do carro"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between
                text-gray">
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src='/steering-wheel.svg'
                            alt="volante"
                            width={20}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src='/tire.svg'
                            alt="pneu"
                            width={20}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src='/gas.svg'
                            alt="combustível"
                            width={18}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {city_mpg} km/l
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title='Ver mais'
                        containerStyles='w-full py-[16px] rounded-full
                        bg-primary-blue'
                        textStyles='text-white text-[14px] leadin-[17px]
                        font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => { setIsOpen(false) }}
                car={car} />
        </div>
    )
}
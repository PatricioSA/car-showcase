'use client';
import { CustomButton } from ".";
import Image from 'next/image'

export default function HeroSection() {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Encontre, reserve, ou alugue um carro - rápido e fácil!
                </h1>

                <p className="hero__subtitle">
                    Simplifique sua experiência de aluguel de carros
                    com nosso processo de reserva sem esforço.
                </p>

                <CustomButton
                    title='Encontre Carros'
                    containerStyles='bg-my-orange text-white rounded-full
                    mt-10'
                    handleClick={handleScroll}
                />

            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src='/hero.png' alt="hero" fill sizes="(max-width: 768px)"
                        className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </section>
    )
}
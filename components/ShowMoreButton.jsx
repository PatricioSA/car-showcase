"use client"

import { useRouter } from "next/navigation"
import { CustomButton } from "."
import { updateSearchParams } from "@/utils"

const ShowMoreButton = ({ pageNumber, isNext }) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPahtName = updateSearchParams('limit', `${newLimit}`)

        router.push(newPahtName)
    }

    return (
        <div className="flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title='Mostrar Mais'
                    containerStyles='bg-my-orange rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMoreButton
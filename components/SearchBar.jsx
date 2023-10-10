"use client"

import { SearchManufacturer } from "."

const SearchBar = () => {
    const handleSearch = () => {

    }

    return (
        <form onSubmit={handleSearch}>
            <div>
                <SearchManufacturer/>
            </div>
        </form>
    )
}

export default SearchBar
import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../../context/StateProvider'
import useGoogleSearch from '../../HOOK/useGoogleSearch'

function SearchPage() {
    const [{ term }, dispatch] = useStateValue()

    const { data } = useGoogleSearch(term)


    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__results"></div>
        </div>
    )
}

export default SearchPage

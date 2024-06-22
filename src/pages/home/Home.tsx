import React from 'react'
import AllNews from '../../components/AllNews'
import Search from '../../components/search/Search'

const Home = () => {
    return (
        <div>
            <Search />
            <AllNews />
        </div>
    )
}

export default Home
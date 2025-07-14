import React from 'react'
import { allCocktails } from '../../constants'




const Menu = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const goToSlide = (index) => {
        const newIndex = (index + allCocktails.length) % allCocktails.length
        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + allCocktails.length) % allCocktails.length]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);



    return (
        <section id="menu">
            <img src="/images/slider-left-leaf.png" alt="sleftleaf" id='m-left-leaf' />
            <img src="/images/slider-right-leaf.png" alt="srightleaf" id='m-right-leaf' />
            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <nav className="cocktail-tabs">
                {allCocktails?.map((cocktail, index) => {
                    const isActive = index === currentIndex
                    return (
                        <button key={cocktail.id} className={`
				${isActive
                                ? 'text-white border-white'
                                : 'text-white/50 border-white/50'}
			 `} onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrow">
                    <button className="text-left"
                        onClick={() => goToSlide(currentIndex - 1)}
                    >
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" />
                    </button>
                    <button className="text-right"
                        onClick={() => goToSlide(currentIndex + 1)}
                    >
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} alt="" className="object-contain" />
                </div>
            </div>
        </section>
    )
}

export default Menu
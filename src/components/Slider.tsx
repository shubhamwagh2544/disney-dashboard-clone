import { useEffect, useRef, useState } from "react"
import trendingVideos from "../services/GlobalAPI"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'
const screenWidth = window.innerWidth

export const Slider = () => {

    const [movies, setMovies] = useState([])
    const slideReference = useRef()

    useEffect(() => {
        trendingVideos.then((res): any => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    }, [])

    const slideRight = (element): any => {
        element.scrollLeft += screenWidth - 100
    }

    const slideLeft = (element): any => {
        element.scrollLeft -= screenWidth - 105
    }

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer" onClick={() => slideLeft(slideReference.current)} />
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0" onClick={() => slideRight(slideReference.current)} />

            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={slideReference}>
                {
                    movies.map((item): any => (
                        <img src={IMAGE_BASE_URL + item.backdrop_path}
                            className="min-w-full object-cover h-[500px] object-top ml-3 mr-3 rounded-lg hover:border-[2px] border-gray-400 transition-all duration-100 ease-in-out" />
                    ))
                }
            </div>
        </div>
    )
}
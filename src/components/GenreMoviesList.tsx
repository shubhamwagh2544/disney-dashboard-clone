import { genre } from "../data/GenreList"

export const GenreMoviesList = () => {
    return (
        <div>
            {
                genre.map((item, index): any => (
                    <div className="p-8 px-8 md:px-16">
                        <h1 className="text-white font-semibold text-[20px]">{item.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}
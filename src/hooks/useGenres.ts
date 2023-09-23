import useData from "./useData";
import genres from "../data/Genres";

export interface Genre {
  id: number
  name: string
  image_background: string
}

// use static way for non dynamic data
// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => ({ data: genres, isLoading: false, error: null})

export default useGenres
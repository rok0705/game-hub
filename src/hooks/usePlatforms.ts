import useData from "./useData"
import platforms from "../data/Platforms"

interface Platform {
    id: number
    name: string
    slug: string
}

// use static way for non dynamic data
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => ({ data: platforms, error: null})

export default usePlatforms
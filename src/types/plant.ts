export type PlantType = 'Indoor' | 'Outdoor'
export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Plant {
  id: string
  name: string
  image: string
  price: number
  type: PlantType
  description: string
  difficulty: Difficulty
  lightRequirement: string
  waterRequirement: string
  careInstructions: string[]
}

export type SortOption = 'name-asc' | 'price-asc' | 'price-desc'

export interface PlantFilters {
  search: string
  type: PlantType | 'All'
  minPrice: number
  maxPrice: number
  sort: SortOption
}

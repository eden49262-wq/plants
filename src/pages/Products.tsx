import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import { filterAndSortPlants, getPriceRange, sortOptions } from '../data/plants'
import type { PlantType, SortOption } from '../types/plant'

export default function Products() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type') as PlantType | null
  const priceRange = getPriceRange()

  const [search, setSearch] = useState('')
  const [type, setType] = useState<PlantType | 'All'>(
    initialType === 'Indoor' || initialType === 'Outdoor' ? initialType : 'All',
  )
  const [minPrice, setMinPrice] = useState(priceRange.min)
  const [maxPrice, setMaxPrice] = useState(priceRange.max)
  const [sort, setSort] = useState<SortOption>('name-asc')

  const filteredPlants = useMemo(
    () =>
      filterAndSortPlants({
        search,
        type,
        minPrice,
        maxPrice,
        sort,
      }),
    [search, type, minPrice, maxPrice, sort],
  )

  return (
    <>
      <section className="bg-forest-800 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-white md:text-5xl">
            Our Plant Collection
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-200">
            Explore our curated selection of 30 premium indoor and outdoor plants.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal>
            <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Search */}
                <div className="lg:col-span-2">
                  <label htmlFor="search" className="block text-sm font-medium text-forest-700">
                    Search Plants
                  </label>
                  <div className="relative mt-2">
                    <svg
                      className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-forest-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      id="search"
                      type="text"
                      placeholder="Search by name or description..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full rounded-xl border border-forest-200 py-3 pl-10 pr-4 text-forest-900 placeholder:text-forest-400 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                    />
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-forest-700">
                    Plant Type
                  </label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value as PlantType | 'All')}
                    className="mt-2 w-full rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                  >
                    <option value="All">All Types</option>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <label htmlFor="sort" className="block text-sm font-medium text-forest-700">
                    Sort By
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="mt-2 w-full rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div className="mt-6 border-t border-forest-100 pt-6">
                <label className="block text-sm font-medium text-forest-700">
                  Price Range: ${minPrice} – ${maxPrice}
                </label>
                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={minPrice}
                    onChange={(e) => {
                      const val = Number(e.target.value)
                      setMinPrice(val > maxPrice ? maxPrice : val)
                    }}
                    className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-forest-200 accent-forest-600"
                  />
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={maxPrice}
                    onChange={(e) => {
                      const val = Number(e.target.value)
                      setMaxPrice(val < minPrice ? minPrice : val)
                    }}
                    className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-forest-200 accent-forest-600"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results count */}
          <p className="mt-8 text-forest-600">
            Showing <span className="font-semibold text-forest-800">{filteredPlants.length}</span>{' '}
            {filteredPlants.length === 1 ? 'plant' : 'plants'}
          </p>

          {/* Plant Grid */}
          {filteredPlants.length > 0 ? (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPlants.map((plant, index) => (
                <ScrollReveal key={plant.id} delay={(index % 4) * 75}>
                  <PlantCard plant={plant} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center">
              <svg
                className="mx-auto h-16 w-16 text-forest-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-display font-semibold text-forest-800">
                No plants found
              </h3>
              <p className="mt-2 text-forest-600">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setType('All')
                  setMinPrice(priceRange.min)
                  setMaxPrice(priceRange.max)
                  setSort('name-asc')
                }}
                className="mt-6 rounded-full bg-forest-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-700"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

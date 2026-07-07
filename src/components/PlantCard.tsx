import { Link } from 'react-router-dom'
import type { Plant } from '../types/plant'

interface PlantCardProps {
  plant: Plant
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700',
}

const typeColors = {
  Indoor: 'bg-forest-100 text-forest-700',
  Outdoor: 'bg-sage-200 text-forest-800',
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link
      to={`/plants/${plant.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold $ {typeColors[plant.type]}`}
        >
          {plant.type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-display font-semibold text-forest-900 group-hover:text-forest-600 transition-colors">
            {plant.name}
          </h3>
          <span className="text-lg font-bold text-forest-600 whitespace-nowrap">
            ETB {plant.price}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-forest-600">
          {plant.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium $ {difficultyColors[plant.difficulty]}`}
          >
            {plant.difficulty}
          </span>
          <span className="text-xs text-forest-500">
            {plant.lightRequirement}
          </span>
        </div>
      </div>
    </Link>
  )
}

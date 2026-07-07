import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import { getPlantById } from '../data/plants'

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Hard: 'bg-red-100 text-red-700 border-red-200',
}

export default function PlantDetails() {
  const { id } = useParams<{ id: string }>()
  const plant = id ? getPlantById(id) : undefined
  const [shareMessage, setShareMessage] = useState('')

  if (!plant) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-display font-bold text-forest-900">
          Plant Not Found
        </h1>
        <p className="mt-4 text-forest-600">
          Sorry, we couldn&apos;t find the plant you&apos;re looking for.
        </p>
        <Button to="/products" className="mt-8">
          Browse All Plants
        </Button>
      </div>
    )
  }

  const handleShare = async () => {
    const shareData = {
      title: plant.name,
      text: `Check out ${plant.name} at City Plants and Gardening Work — ETB ${plant.price}`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShareMessage('Link copied to clipboard!')
        setTimeout(() => setShareMessage(''), 3000)
      }
    } catch {
      setShareMessage('Unable to share. Please copy the URL manually.')
      setTimeout(() => setShareMessage(''), 3000)
    }
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-forest-600">
          <Link to="/" className="hover:text-forest-800 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-forest-800 transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-forest-900 font-medium">{plant.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal animation="slide-in-left">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={plant.image}
                alt={plant.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-in-right">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-forest-100 px-3 py-1 text-sm font-semibold text-forest-700">
                  {plant.type}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${difficultyColors[plant.difficulty]}`}
                >
                  {plant.difficulty}
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-display font-bold text-forest-900 md:text-5xl">
                {plant.name}
              </h1>

              <p className="mt-2 text-3xl font-bold text-forest-600">
                ETB {plant.price}
              </p>

              <p className="mt-6 text-lg text-forest-700 leading-relaxed">
                {plant.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-forest-50 p-4">
                  <div className="flex items-center gap-3">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-forest-500">Light</p>
                      <p className="font-semibold text-forest-800">{plant.lightRequirement}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-forest-50 p-4">
                  <div className="flex items-center gap-3">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 3-4 5.5-4 9a4 4 0 008 0c0-3.5-2.5-6-4-9z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-forest-500">Water</p>
                      <p className="font-semibold text-forest-800">{plant.waterRequirement}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" size="lg">
                  Contact Us About This Plant
                </Button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-forest-600 px-6 py-3 font-medium text-forest-600 transition-all duration-300 hover:bg-forest-600 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>

              {shareMessage && (
                <p className="mt-3 text-sm font-medium text-forest-600 animate-fade-in">
                  {shareMessage}
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Care Instructions */}
        <ScrollReveal className="mt-16">
          <div className="rounded-3xl bg-white p-8 shadow-md md:p-12">
            <h2 className="text-2xl font-display font-bold text-forest-900 md:text-3xl">
              Care Instructions
            </h2>
            <p className="mt-2 text-forest-600">
              Follow these tips to keep your {plant.name} healthy and thriving.
            </p>
            <ol className="mt-8 space-y-4">
              {plant.careInstructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-forest-700 leading-relaxed">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}

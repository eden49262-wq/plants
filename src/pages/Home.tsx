import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import PlantCard from '../components/PlantCard'
import { getFeaturedPlants } from '../data/plants'
import { Link } from 'react-router-dom'


const whyChooseUs = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Expert Care',
    description:
      'Every plant is nurtured by our horticulture team with decades of combined experience.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality Guaranteed',
    description:
      'We stand behind every plant with our 30-day health guarantee and free replacement policy.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Delivery',
    description:
      'Carefully packaged plants delivered to your door within 2-3 business days.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Plant Support',
    description:
      'Free care guides and expert advice to help your plants thrive for years to come.',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    quote:
      'Green Haven transformed my living room! The Monstera I ordered arrived in perfect condition and has grown beautifully.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Landscape Designer',
    quote:
      'I source all my client projects from Green Haven. Their outdoor selection is unmatched in quality and variety.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Plant Enthusiast',
    quote:
      'As a beginner, I was nervous about keeping plants alive. Their care guides and support team made it so easy!',
    rating: 5,
  },
]

const categories = [
  {
    title: 'Indoor Plants',
    description: 'Bring life to your home with our curated collection of houseplants.',
    image: 'https://images.unsplash.com/photo-1614594975524-2aba8ac8526b?w=800&q=80',
    link: '/products?type=Indoor',
    count: 15,
  },
  {
    title: 'Outdoor Plants',
    description: 'Create a stunning garden with trees, shrubs, flowers, and herbs.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    link: '/products?type=Outdoor',
    count: 15,
  },
]

export default function Home() {
  const featuredPlants = getFeaturedPlants()

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1466692476869-a0531ebbfc54?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-forest-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <p className="animate-fade-in mb-4 text-sm font-semibold uppercase tracking-widest text-forest-300">
            Welcome to Nature&apos;s Paradise
          </p>
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-display font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            City Plants And
            <span className="block text-forest-300">Gardening Work</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg text-forest-100 md:text-xl">
            Discover premium indoor and outdoor plants, hand-selected and nurtured
            with care. Transform your space into a living sanctuary.
          </p>
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/products" size="lg">
              Browse Plants
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Featured Plants"
              subtitle="Hand-picked favorites loved by our customers and staff alike."
            />
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlants.map((plant, index) => (
              <ScrollReveal key={plant.id} delay={index * 100}>
                <PlantCard plant={plant} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <Button to="/products" variant="outline">
              View All Plants
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-forest-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Shop by Category"
              subtitle="Whether indoors or out, find the perfect plant for your space."
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 150}>
                <Link
                  to={category.link}
                  className="group relative block overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-sm font-medium text-forest-300">
                      {category.count} plants
                    </span>
                    <h3 className="mt-1 text-2xl font-display font-bold text-white md:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-forest-200">{category.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform group-hover:translate-x-2">
                      Explore Collection
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Why Choose Us"
              subtitle="We're passionate about plants and committed to your success."
            />
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-forest-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest-800 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What Our Customers Say"
              subtitle="Join thousands of happy plant parents across the country."
              light
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 100}>
                <div className="rounded-2xl bg-forest-900/50 p-8 backdrop-blur-sm">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-forest-100 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-forest-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-forest-400">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-forest-600 px-8 py-16 text-center md:px-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-forest-500/30" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-forest-500/20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
                  Ready to Start Your Plant Journey?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-forest-100 text-lg">
                  Browse our collection of 30+ premium plants or reach out for
                  personalized recommendations.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button to="/products" variant="secondary" size="lg">
                    Shop Now
                  </Button>
                  <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-700">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

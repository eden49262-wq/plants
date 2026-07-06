import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import v1 from '../assets/va.mp4';
import v2 from '../assets/vb.mp4';
import v3 from '../assets/vc.mp4';


const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '30+', label: 'Plant Varieties' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '100%', label: 'Quality Guarantee' },
]

const our_work_in_action = [
  {
    name: 'Spaces Transformed',
    role: 'Our Plants, Your Spaces',
    video: v1,
  },
  {
    name: 'Hallway & Corridor Transformation',
    role: 'you see how this space comes to life',
    video: v2,
  },
  {
    name: 'The Green Experience',
    role: 'our plants in hotels and high-end cafes',
    video: v3,
  },
]

const values = [
  {
    title: 'Sustainability',
    description:
      'We use eco-friendly growing practices, biodegradable packaging, and partner with local organic suppliers.',
  },
  {
    title: 'Education',
    description:
      'We believe everyone can be a successful plant parent. Our guides and workshops empower you to grow with confidence.',
  },
  {
    title: 'Community',
    description:
      'Plants bring people together. We host events, workshops, and support local gardening initiatives.',
  },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <video
  src={v1}
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover"
/>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-white md:text-5xl lg:text-6xl">
            About City Plants and Gardening Work
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-forest-200 md:text-xl">
            Cultivating beauty, one plant at a time since 2010.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal animation="slide-in-left">
 <video

  src={v2}

  autoPlay

  muted

  loop

  playsInline

  className="rounded-3xl shadow-xl"

/> 
            </ScrollReveal>
            <ScrollReveal animation="slide-in-right">
              <h2 className="text-3xl font-display font-bold text-forest-900 md:text-4xl">
                Our Story
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-forest-400" />
              <p className="mt-6 text-lg text-forest-700 leading-relaxed">
                City Plants and Gardening Work began as a small family greenhouse with a simple
                mission: to share the joy of plants with everyone. What started with
                a handful of houseplants has grown into a full-service nursery
                offering premium indoor and outdoor plants.
              </p>
              <p className="mt-4 text-lg text-forest-700 leading-relaxed">
                Today, our team of passionate horticulturists carefully selects and
                nurtures every plant in our collection. From rare tropical specimens
                to hardy garden favorites, we ensure each plant meets our high
                standards before it reaches your home.
              </p>
              <Button to="/products" className="mt-8">
                Explore Our Collection
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-forest-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100} className="text-center">
                <p className="text-4xl font-display font-bold text-forest-700 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-forest-600">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do."
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="rounded-2xl bg-white p-8 shadow-md">
                  <h3 className="text-xl font-display font-semibold text-forest-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-forest-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="See Our Work in Action"
              subtitle="Watch our plant designs bring this space to life"
            />
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {our_work_in_action.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <video
  src={member.video}
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover"
/>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-display font-semibold text-forest-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-forest-600">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

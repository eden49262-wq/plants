import { useState, type FormEvent } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
const socialContacts = [
  {
    platform: 'Instagram',
    label: '@cityplants.gardening',
    url: 'https://instagram.com/city.1132'
  },
  {
    platform: 'TikTok',
    label: '@cityplants.gardening',
    url: 'https://tiktok.com/@fitse46'
  },
  {
    platform: 'Telegram',
    label: 'Join our Channel',
    url: 'https://t.me/@Fitse52'
  }
];

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visit Us',
    details: ['Addis Ababa', 'Megenagna behind amce'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    details: ['+251 90 689 4087 and +251 92 220 9222', 'Mon–Sat: 9am – 6pm'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    details: ['Cityplantandgardeningwork@gmail.', 'We reply within 24 hours'],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-forest-800 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-200">
            Have a question about a plant or need personalized advice? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>
      <div className="mt-6 space-y-4">
  <h4 className="text-sm font-semibold text-forest-900 uppercase tracking-wider">
    Follow Our Journey
  </h4>
  
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
    {socialContacts.map((social) => (
      <a
        key={social.platform}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col p-3 rounded-xl border border-forest-100 bg-forest-50/50 hover:bg-forest-50 transition-colors"
      >
        <span className="text-xs text-forest-600 font-semibold">
          {social.platform}
        </span>
        <span className="text-sm text-forest-900 font-medium truncate">
          {social.label}
        </span>
      </a>
    ))}
  </div>
</div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ScrollReveal animation="slide-in-left">
                <h2 className="text-2xl font-display font-bold text-forest-900">
                  Get in Touch
                </h2>
                <p className="mt-4 text-forest-600 leading-relaxed">
                  Whether you&apos;re looking for a specific plant, need care advice,
                  or want to visit our nursery, our friendly team is here to help.
                </p>

                <div className="mt-10 space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-forest-900">{item.title}</h3>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-forest-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal animation="slide-in-right">
                <div className="rounded-3xl bg-white p-8 shadow-md md:p-10">
                  {submitted ? (
                    <div className="py-12 text-center animate-fade-in">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-2xl font-display font-bold text-forest-900">
                        Message Sent!
                      </h3>
                      <p className="mt-3 text-forest-600">
                        Thank you for reaching out. We&apos;ll get back to you within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-forest-700">
                            Full Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="mt-2 w-full rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-forest-700">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-2 w-full rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-forest-700">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="mt-2 w-full rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                        >
                          <option>General Inquiry</option>
                          <option>Plant Recommendation</option>
                          <option>Order Question</option>
                          <option>Visit the Nursery</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-forest-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="mt-2 w-full resize-none rounded-xl border border-forest-200 px-4 py-3 text-forest-900 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="overflow-hidden rounded-3xl shadow-lg">
  <iframe
    title="City Plants and Gardening Work Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5220939139813!2d38.80516459999999!3d9.0160453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850072dd6063%3A0x869eece83f05f028!2sCity%20plants!5e0!3m2!1sen!2set!4v1783035943685!5m2!1sen!2set"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full"
  />
</div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

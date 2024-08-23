import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import catGroomingBg from '@/images/cat-grooming-bg.jpg'
import pawLogo from '@/images/paw-logo.svg'
import pawBadge from '@/images/paw-badge.svg'
import pawComment from '@/images/paw-comment.svg'
const clients = [
  ['Domestic Shorthair', pawLogo],
  ['American Shorthair', pawLogo],
  ['Domestic Longhair', pawLogo],
  ['Ragdoll', pawLogo],
  ['Siamese', pawLogo],
  ['Bengal', pawLogo],
  ['British Shorthair', pawLogo],
  ['Persian', pawLogo],
  ['Sphynx', pawLogo],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-sky-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with many different breeds
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn className="flex">
                  <Image className="w-10" src={logo} alt={client} unoptimized />
                  <span className="mt-2 block text-white">{client}</span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function BenefitsSection({
  benefits,
}: {
  benefits: Array<{
    logo: string
    client: string
    title: string
    description: string
  }>
}) {
  return (
    <>
      <SectionIntro
        title="Why Glamour Félin?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We have a proven track record of delivering results for our clients.
          Here are a few reasons why you should choose Glamour Félin.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-sky-800/10 transition hover:bg-neutral-100 sm:p-8">
                <h3 className="flex items-center gap-x-3">
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={benefit.logo}
                    alt={benefit.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                  <span className="text-3xl font-bold text-sky-800">
                    {index + 1}°
                  </span>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-sky-800">
                  {benefit.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {benefit.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help your cat look and feel their best, while you relax at home."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our team of professional groomers are experts at what they do,
          ensuring your cat gets the best care. We offer a range of services to
          help your cat look and feel their best, while you read your favorite
          book.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={catGroomingBg}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Luxury Coat Grooming">
              A complete coat grooming service to ensure a silky, tangle-free
              fur your cat will love.
            </ListItem>
            <ListItem title="Pedicure Pampering">
              Clipping and filing of nails paired with a gentle paw massage for
              your cat&apos;`s comfort.
            </ListItem>
            <ListItem title="Soothing Shampoos">
              Specialty shampoos and conditioners selected for your cat&apos;s
              specific fur type and skin needs.
            </ListItem>
            <ListItem title="Refreshing Dental Care">
              Dental brushing services to keep your cat&apos;`s breath fresh and
              teeth healthy.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Glamour Félin is the best at home cat grooming, including nail trimming and shaving. Give your cat the glam it deserves in a stress-free environment: your home!.',
}

export default async function Home() {
  const benefits = [
    {
      logo: pawBadge,
      client: 'Domestic Shorthair',
      title: 'Stress-free grooming',
      description:
        'We provide a stress-free grooming experience for your cat in the comfort of your home.',
    },
    {
      logo: pawBadge,
      client: 'American Shorthair',
      title: 'Professional service',
      description:
        'Our team of professional groomers are experts at what they do, ensuring your cat gets the best care.',
    },
    {
      logo: pawBadge,
      client: 'Domestic Longhair',
      title: 'Convenient scheduling',
      description:
        'We offer convenient scheduling options to fit your busy lifestyle.',
    },
  ]
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-sky-800 [text-wrap:balance] sm:text-7xl">
            The best at home cat grooming in town
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Glamour Félin is the best at home cat grooming, including nail
            trimming and shaving. Give your cat the glam it deserves in a
            stress-free environment: <strong>your home!</strong>
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <BenefitsSection benefits={benefits} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Customer', logo: pawComment }}
      >
        Glamour Félin is fantastic! They&apos;re quick and efficient, plus very
        gentle. My cat even rubbed up against them before they left.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}

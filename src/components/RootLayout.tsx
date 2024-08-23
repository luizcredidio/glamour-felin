'use client'

import { MotionConfig, motion, useReducedMotion } from 'framer-motion'
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import catLogo from '@/images/cat-logo.svg'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative flex items-center"
        >
          <svg
            height="64"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={invert ? 'fill-amber-300' : 'fill-sky-950'}
          >
            <g
              strokeWidth="2"
              fill="none"
              stroke={invert ? '#fcd34d' : '#0c4a6e'}
            >
              <path d="m34.668 24.93c-1.0859-0.21484-2.9062-0.23438-3.1406 0.5-0.23438 0.73437 1.5352 1.3203 1.8828 1.4219 0 0-0.96094 1.5469 0.13281 1.9648 1.0938 0.41797 1.7891-0.79688 1.8008-1.5664 0.60547 0.019531 1.5547-0.039062 1.668-0.69531 0.10938-0.65234-1.25-1.418-2.3438-1.625zm0.17188 1.6055c-0.28516 0.15234-0.33984 1.7188-0.84766 1.5742-0.51172-0.14453 0.39844-1.3828 0.09375-1.6055-0.30859-0.22656-1.4414-0.67578-1.4648-0.85938-0.019532-0.18359 0.77734-0.0625 1.5977 0.082031 0.66406 0.11328 1.7617 0.42969 1.6875 0.64453-0.074219 0.21875-0.77734 0-1.0664 0.16406z"></path>
              <path d="m78.07 57.285c-2.0547-6.3711-4.543-11.98-7.3242-15.875-2.0156-2.8242-4.4492-4.6836-5.7578-5.6367-3.1094-2.2695-8.0195-3.9062-11.723-6.5352-2.6602-1.6797-4.3164-4.4805-3.7148-8.3477 0.25781-1.668 1.1367-4.0508 1.6055-6.2812 0.63281-2.957 0.79688-5.6367 0.22656-6.0469-1.0039-0.70703-6.1992 1.7188-7.3242 2.7734-0.70703 0.49219-1.2891 0.94922-2.3945 0.70703-0.52344-0.11328-1.7188-0.78906-2.9375-1.1953-1.3906-0.46094-2.8047-0.67578-3.2422-0.94922-0.41797-0.26563-1.3594-2.3828-2.6602-4.3594-1.2461-1.8906-2.8555-3.6523-3.5078-3.5273-1.3281 0.25781-2.5664 6.5781-2.8438 8.4922-0.27734 1.9141-1.3203 5.207-2.9688 7.7422-0.76562 1.1875-1.6484 2.7422-1.9336 4.4688-0.32812 1.9648 0.0625 4.1328 1.1445 6.2109 0.89844 2.0039 2.2383 3.6328 2.9453 5.75 0.87891 2.9258 0.54297 5.2695 1.1953 9.0039 0.64453 3.7344 4.7344 27.027 4.8984 30.074 0.16406 3.0469-0.58203 4.9609-0.011718 8.7031 0.57422 3.7422 9.8906 5.832 11.305 6.1367-10.965 0.54297-15.641-7.9805-18.516-9.0117-1.1562-0.41797-2.957-0.039062-3.6914 0.97266-0.73828 1.0117-2.4531 2.4648-1.1055 5.7578 1.3516 3.293 6.6914 6.6914 11.488 8.418 4.7969 1.7305 10.988 2.8438 18.566 3.2109 7.5781 0.36719 15.691-0.89844 21.594-5.5234 1.6562-1.3008 3.0703-2.8125 4.2773-5.2773 1.207-2.4648 1.4922-2.2188 3.3867-5.3711 2.2891-4.3594 2.5859-13.484-0.97656-24.484zm0.125 23.816c-0.75781 1.8828-1.8906 2.2891-3.2227 5.1133-1.3203 2.8242-4.0312 6.1797-9.1875 8.2852s-12.355 2.6602-16.082 2.4648c-5.4102-0.27734-11.078-0.84766-16.867-2.7617-5.7891-1.9102-11.273-5.4375-12.227-8.5-0.49219-1.5859-0.64453-2.5352 0.42969-3.8867 1.0742-1.3516 1.8398-1.6875 3.1094-1.2773 1.2695 0.41016 5.0312 4.543 8 6.3633 2.9688 1.8203 6.6406 2.6406 10.023 2.6602 3.3867 0.019531 5.5234-0.019531 7.3555 0.21484 1.832 0.23438 10.75 0.09375 9.7812-2.1797-0.98047-2.2695-7.7969-0.082031-8.6133 0.15234-1.5352 0.5625-2.8359 1.0312-3.8047 0.97266-1.6172-0.10156-2.6797-1.1367-5.1445-1.5977-0.79688-0.19531-7.3125-1.75-8.5625-4.3672-1.2461-2.6172-0.15234-4.9102-0.36719-9.1445-0.21484-4.2266-4.3477-26.617-4.7578-30.066-0.41016-3.4453-0.41016-4.0312-1.0547-7.6914-0.64453-3.6602-3.1719-6.0156-4.1836-9.0742-1.0117-3.0586-0.61328-4.8398 1.5234-8.2344s3.0195-6.7539 3.1523-7.7969c0.13281-1.043 1.2188-5.6367 2.0469-7.7148 2.3945 1.9844 4.0625 6.0352 4.6836 6.9766 0.625 0.94141 2.8945 1.3516 4.3086 1.75 1.4102 0.39844 3.7852 1.6172 4.3789 1.4219 0.80859-0.26562 0.89844-0.37891 1.6797-0.94141 0.77734-0.5625 5.1133-2.7539 6.0859-2.6914 0.13281 2.8867-0.47266 5.4414-1.2578 8.4922-0.41016 1.5859-1.0859 3.7422-0.85938 5.8086 0.21484 1.9023 1.2695 3.7344 2.5898 4.9609 3.0781 3.0273 9.4336 5.1562 11.848 6.875 2.4141 1.7305 4.1953 3.0078 6.7734 6.25 2.5781 3.2422 4.7578 9.207 6.8047 14.617 2.0352 5.418 4.6328 16.465 1.6172 24.547zm-28.277 7.9297c0.48047-0.16406 7.6914-2.25 8.2656-1.2383 0.57422 1.0117-7.7539 1.2383-8.2656 1.2383z"></path>
            </g>
          </svg>
          <span
            className={clsx(
              'hidden text-3xl font-semibold sm:block',
              invert ? 'text-amber-300' : 'text-sky-900',
            )}
          >
            Glamour Félin
          </span>
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="/contact" invert={invert}>
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-sky-800/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-sky-800 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-sky-800">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-sky-800 px-6 py-10 even:mt-px hover:text-amber-300 sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-sky-800 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-sky-800 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            {/* TODO: <Navigation /> */}
            <div className="relative bg-sky-800 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                    <h2 className="mt-16 gap-8 font-display text-base font-semibold text-white">
                      Contact us
                    </h2>
                    <div className="flex flex-col">
                      <Link href="tel:+14385555555" className="mt-6 text-white">
                        <span>Tel: </span>
                        <span className="hover:text-amber-400">
                          +1 (438) 555-5555
                        </span>
                      </Link>
                      <Link
                        href="sms://+14035550185?body=I'm%20interested%20in%20the%20cat%20grooming%20services.%20Please%20provide%20more%20information."
                        className="mt-6 text-white"
                      >
                        <span>Message: </span>
                        <span className="hover:text-amber-400">
                          +1 (438) 555-5555
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-sky-800/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}

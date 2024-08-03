import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-sky-800'}>{name}</strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Brossard - QC" invert={invert}>
          2850 Rue Briére
          <br />
          Or... at the confort of you home!
        </Office>
      </li>
      <li>
        <Office name="Longueil - QC" invert={invert}>
          At the confort of you home!
        </Office>
      </li>
      <li>
        <Office name="Boucherville - QC" invert={invert}>
          At the confort of you home!
        </Office>
      </li>
      <li>
        <Office name="La Prairie - QC" invert={invert}>
          At the confort of you home!
        </Office>
      </li>
      <li>
        <Office name="Montreal - QC (Coming soon...)" invert={invert}>
          At the confort of you home!
        </Office>
      </li>
    </ul>
  )
}

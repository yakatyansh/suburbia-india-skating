import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 grid-cols-[1fr,auto,1fr] ">
        <Link href="/" className="justify-self-start">Logo</Link>
        <nav aria-label='Main Navigation' className="col-span-full row-start-2 md:col-span-1 md:row-start-1 md:col-start-2 ">
          <ul>
            <li>
              <Link href="/about">Boards</Link>
            </li>
           </ul>
        </nav>
        <ButtonLink href="/" icon='cart' color='purple' aria-label='Cart(1)'>
            Cart (1)
        </ButtonLink>
      </div>
    </header>
  )
}
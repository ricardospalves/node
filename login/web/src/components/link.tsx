import { cn } from '@/lib/utils'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

export type LinkProps = NextLinkProps & {
  className?: string
  children?: ReactNode
}

export const Link = ({ className, children, ...nextLinkProps }: LinkProps) => {
  return (
    <NextLink className={cn('underline text-primary')} {...nextLinkProps}>
      {children}
    </NextLink>
  )
}

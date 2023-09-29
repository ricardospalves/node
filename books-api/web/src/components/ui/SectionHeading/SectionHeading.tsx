import type { TypographyProps } from '@mui/material'
import { Typography } from '@mui/material'

export type SectionHeadingProps = Omit<TypographyProps, 'variant'>

export const SectionHeading = ({
  component = 'h2',
  ...props
}: SectionHeadingProps) => {
  return <Typography variant="h5" component={component} {...props} />
}

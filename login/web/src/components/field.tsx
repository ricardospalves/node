import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

type InputNativeProps = ComponentPropsWithoutRef<'input'>

type SelectedNativeProps = Omit<InputNativeProps, 'id' | 'className'>

export type FieldProps = {
  label: string
  className?: string
  error?: boolean
  helpertext?: string
} & SelectedNativeProps

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, className, error, helpertext, ...inputProps }, ref) => {
    const fieldId = useId()
    const helperTextId = useId()

    return (
      <div className={className}>
        <Label htmlFor={fieldId} className="block pb-1">
          {label}
        </Label>

        <Input
          id={fieldId}
          className={clsx([
            'block w-full',
            error &&
              'bg-red-500/5 text-red-500 border-red-400 hover:border-red-400 focus-visible:border-red-400',
          ])}
          ref={ref}
          aria-describedby={helpertext ? helperTextId : undefined}
          aria-invalid={error || undefined}
          {...inputProps}
        />

        {helpertext && (
          <p
            id={helperTextId}
            className={clsx([
              'pt-1 text-xs text-right',
              error && 'text-red-400',
            ])}
          >
            {helpertext}
          </p>
        )}
      </div>
    )
  },
)

Field.displayName = 'Field'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

type InputNativeProps = ComponentPropsWithoutRef<'input'>

type SelectedNativeProps = Omit<InputNativeProps, 'id' | 'className'>

export type FieldProps = {
  label: string
  className?: string
} & SelectedNativeProps

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, className, ...inputProps }, ref) => {
    const fieldId = useId()

    return (
      <div className={className}>
        <Label htmlFor={fieldId} className="block pb-1">
          {label}
        </Label>

        <Input
          id={fieldId}
          className="block w-full"
          ref={ref}
          {...inputProps}
        />
      </div>
    )
  },
)

Field.displayName = 'Field'

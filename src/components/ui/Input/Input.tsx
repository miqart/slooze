import * as React from 'react';
import { FunctionComponent, SVGProps } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/Form';
import { cn } from 'src/lib/utils';

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  outlineNone?: boolean;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconColor?: string;
  iconPlacement?: 'start' | 'end';
};

export interface InputProps<T extends FieldValues> extends InputBaseProps {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  description?: string;
  formItemClassName?: string;
  outlineNone?: boolean;
}

export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      className,
      type,
      outlineNone,
      Icon = null,
      iconPlacement = 'start',
      ...props
    },
    ref
  ) => {
    const outlineNoneProp = Icon ? true : outlineNone;

    return (
      <div
        className={cn('rounded-lg bg-input', {
          'flex h-10 items-center gap-x-2 border px-4 focus-within:ring-1 focus-within:ring-ring':
            !!Icon,
        })}
      >
        {Icon && iconPlacement === 'start' && (
          <Icon className="h-4 w-4 text-gray-500" />
        )}
        <input
          type={type}
          className={cn(
            'flex w-full bg-transparent py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            {
              'rounded-lg border px-4': !Icon,
              'focus-visible:ring-1 focus-visible:ring-ring': !outlineNoneProp,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {Icon && iconPlacement === 'end' && (
          <Icon width={16} height={16} className="text-gray-500" />
        )}
      </div>
    );
  }
);
InputBase.displayName = 'InputBase';

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  formItemClassName,
  onChange,
  ...rest
}: InputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemClassName}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <InputBase
              placeholder={placeholder}
              {...field}
              onChange={onChange ? onChange : field.onChange}
              {...rest}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Input;

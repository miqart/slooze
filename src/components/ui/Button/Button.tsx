import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from 'src/lib/utils';

import { buttonVariants } from './Button.constants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isPending?: boolean;
  pendingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isPending = false,
      pendingText = '',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size: variant === 'icon' && !size ? 'icon' : size,
            className,
          })
        )}
        ref={ref}
        type={asChild ? undefined : 'button'}
        {...props}
        disabled={props.disabled ?? isPending}
      >
        {isPending ? (
          <>
            <ArrowPathIcon
              width={18}
              height={18}
              className={cn('animate-spin', { 'mr-2': !!pendingText })}
            />
            {pendingText}
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export default Button;

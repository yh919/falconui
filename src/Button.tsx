import * as React from "react";
import { cn } from "./lib/cn";
import { Slot, Slottable } from "@radix-ui/react-slot";

import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded whitespace-nowrap font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 active:scale-[0.99] duration-500 hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-zinc-50 dark:text-zinc-900 dark:bg-zinc-50",
        outline:
          "border border-zinc-300 bg-white dark:border-zinc-800 dark:bg-zinc-950 hover:dark:bg-zinc-800 hover:bg-zinc-200",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,

      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <Slottable>{props.children}</Slottable>
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

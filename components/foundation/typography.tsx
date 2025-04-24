import type React from "react"
import { cn } from "@/lib/utils"

// Typography token types
export type FontSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
export type FontWeight = "normal" | "medium" | "semibold" | "bold"
export type LineHeight = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"
export type LetterSpacing = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

// Base typography props
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

// Heading component
interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ level = 1, children, className, as, ...props }: HeadingProps) {
  const Component = as || (`h${level}` as React.ElementType)

  const baseStyles = "font-heading text-foreground"

  const sizeStyles = {
    1: "text-5xl font-bold tracking-tight lg:text-6xl",
    2: "text-4xl font-bold tracking-tight lg:text-5xl",
    3: "text-3xl font-bold tracking-tight lg:text-4xl",
    4: "text-2xl font-bold tracking-tight",
    5: "text-xl font-semibold tracking-tight",
    6: "text-lg font-semibold tracking-tight",
  }[level]

  return (
    <Component className={cn(baseStyles, sizeStyles, className)} {...props}>
      {children}
    </Component>
  )
}

// Text component for paragraphs
interface TextProps extends TypographyProps {
  size?: FontSize
  weight?: FontWeight
  leading?: LineHeight
  tracking?: LetterSpacing
  variant?: "default" | "muted" | "accent"
}

export function Text({
  children,
  className,
  as = "p",
  size = "base",
  weight = "normal",
  leading = "normal",
  tracking = "normal",
  variant = "default",
  ...props
}: TextProps) {
  const Component = as

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  const lineHeightClasses = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  }

  const letterSpacingClasses = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  }

  const variantClasses = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    accent: "text-primary",
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        lineHeightClasses[leading],
        letterSpacingClasses[tracking],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

interface LabelProps extends TypographyProps {
  size?: "sm" | "base" | "lg"
  required?: boolean
  htmlFor?: string
}

export function Label({ children, className, size = "base", required = false, htmlFor, ...props }: LabelProps) {
  const sizeClasses = {
    sm: "text-xs",
    base: "text-sm",
    lg: "text-base",
  }

  return (
    <label
      htmlFor={htmlFor}
      className={cn("font-medium text-foreground block", sizeClasses[size], className)}
      {...props}
    >
      {children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  )
}

interface CaptionProps extends TypographyProps {
  size?: "xs" | "sm"
}

export function Caption({ children, className, size = "sm", as = "span", ...props }: CaptionProps) {
  const Component = as

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
  }

  return (
    <Component className={cn("text-muted-foreground", sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  )
}

interface HelperTextProps extends TypographyProps {
  status?: "default" | "error" | "success" | "warning"
}

export function HelperText({ children, className, status = "default", as = "p", ...props }: HelperTextProps) {
  const Component = as

  const statusClasses = {
    default: "text-muted-foreground",
    error: "text-destructive",
    success: "text-success",
    warning: "text-warning",
  }

  return (
    <Component className={cn("text-xs mt-1", statusClasses[status], className)} {...props}>
      {children}
    </Component>
  )
}

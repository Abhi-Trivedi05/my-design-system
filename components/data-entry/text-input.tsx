"use client"

import React, { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, X } from "lucide-react"
import { Label } from "@/components/foundation/typography"
import { HelperText } from "@/components/foundation/typography"

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  clearable?: boolean
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
  helperTextClassName?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      startIcon,
      endIcon,
      clearable = false,
      size = "md",
      fullWidth = false,
      required = false,
      disabled = false,
      containerClassName,
      labelClassName,
      inputClassName,
      helperTextClassName,
      id,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [value, setValue] = useState(props.value || props.defaultValue || "")
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`
    const isPassword = type === "password"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    const handleClear = () => {
      setValue("")
      // Create a synthetic event to trigger onChange
      const event = new Event("input", { bubbles: true })
      const inputElement = document.getElementById(inputId) as HTMLInputElement
      if (inputElement) {
        inputElement.value = ""
        Object.defineProperty(event, "target", { value: inputElement })
        inputElement.dispatchEvent(event)
      }
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    const sizeClasses = {
      sm: "h-8 text-sm px-3",
      md: "h-10 text-base px-4",
      lg: "h-12 text-lg px-5",
    }

    const iconSizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    const inputType = isPassword ? (showPassword ? "text" : "password") : type

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full", containerClassName)}>
        {label && (
          <Label htmlFor={inputId} className={cn(labelClassName)} required={required}>
            {label}
          </Label>
        )}
        <div className="relative">
          {startIcon && (
            <div
              className={cn("absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", disabled && "opacity-50")}
            >
              {React.cloneElement(startIcon as React.ReactElement, {
                className: cn(iconSizeClasses[size], (startIcon as React.ReactElement).props.className),
              })}
            </div>
          )}
          <input
            id={inputId}
            type={inputType}
            className={cn(
              "flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              sizeClasses[size],
              startIcon && "pl-10",
              (endIcon || isPassword || (clearable && value)) && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              fullWidth && "w-full",
              inputClassName,
            )}
            ref={ref}
            disabled={disabled}
            required={required}
            value={value as string}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-description` : undefined}
            {...props}
          />
          {clearable && value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear input"
            >
              <X className={iconSizeClasses[size]} />
            </button>
          )}
          {isPassword && !disabled && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className={iconSizeClasses[size]} /> : <Eye className={iconSizeClasses[size]} />}
            </button>
          )}
          {endIcon && !isPassword && !(clearable && value) && (
            <div
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
                disabled && "opacity-50",
              )}
            >
              {React.cloneElement(endIcon as React.ReactElement, {
                className: cn(iconSizeClasses[size], (endIcon as React.ReactElement).props.className),
              })}
            </div>
          )}
        </div>
        {(helperText || error) && (
          <HelperText
            id={error ? `${inputId}-error` : `${inputId}-description`}
            status={error ? "error" : "default"}
            className={cn(helperTextClassName)}
          >
            {error || helperText}
          </HelperText>
        )}
      </div>
    )
  },
)

TextInput.displayName = "TextInput"

export { TextInput }

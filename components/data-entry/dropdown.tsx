"use client"

import * as React from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label, HelperText } from "@/components/foundation/typography"

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  helperText?: string
  label?: string
  required?: boolean
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  className?: string
  containerClassName?: string
  labelClassName?: string
  dropdownClassName?: string
  helperTextClassName?: string
  id?: string
}

export function Dropdown({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error,
  helperText,
  label,
  required = false,
  size = "md",
  fullWidth = false,
  className,
  containerClassName,
  labelClassName,
  dropdownClassName,
  helperTextClassName,
  id,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(value || defaultValue)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const inputId = id || `dropdown-${Math.random().toString(36).substring(2, 9)}`

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])


  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return

    setSelectedValue(option.value)
    setIsOpen(false)
    onChange?.(option.value)
  }

  const selectedOption = options.find((option) => option.value === selectedValue)

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

  return (
    <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full", containerClassName)}>
      {label && (
        <Label htmlFor={inputId} className={cn(labelClassName)} required={required}>
          {label}
        </Label>
      )}
      <div ref={dropdownRef} className={cn("relative", fullWidth && "w-full", className)}>
        <button
          id={inputId}
          type="button"
          className={cn(
            "flex w-full items-center justify-between rounded-md border border-input bg-background text-left ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            sizeClasses[size],
            error && "border-destructive focus-visible:ring-destructive",
            dropdownClassName,
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? inputId : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-description` : undefined}
          {...props}
        >
          <span className={cn(!selectedOption && "text-muted-foreground")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {isOpen ? <ChevronUp className={iconSizeClasses[size]} /> : <ChevronDown className={iconSizeClasses[size]} />}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-input bg-background shadow-md">
            <ul className="max-h-60 overflow-auto py-1" role="listbox" aria-labelledby={label ? inputId : undefined}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 cursor-pointer",
                    option.value === selectedValue ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent",
                    option.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent",
                  )}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                >
                  {option.label}
                  {option.value === selectedValue && <Check className="h-4 w-4" />}
                </li>
              ))}
            </ul>
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
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
export type Variant = "primary" | "secondary" | "outline" | "ghost" | "link"
export type Status = "info" | "success" | "warning" | "error"

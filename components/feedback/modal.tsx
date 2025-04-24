"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/foundation/typography"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  closeOnClickOutside?: boolean
  closeOnEsc?: boolean
  showCloseButton?: boolean
  className?: string
  contentClassName?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
  initialFocus?: React.RefObject<HTMLElement>
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnClickOutside = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  initialFocus,
}: ModalProps) {
  const [isMounted, setIsMounted] = React.useState(false)
  const modalRef = React.useRef<HTMLDivElement>(null)
  const previousActiveElement = React.useRef<Element | null>(null)

  // Handle mounting
  React.useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Handle focus trap and restore focus
  React.useEffect(() => {
    if (!isOpen) return

    // Save current active element to restore focus later
    previousActiveElement.current = document.activeElement

    // Set initial focus
    if (initialFocus?.current) {
      initialFocus.current.focus()
    } else if (modalRef.current) {
      // Focus the first focusable element or the modal itself
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusableElements.length > 0) {
        ;(focusableElements[0] as HTMLElement).focus()
      } else {
        modalRef.current.focus()
      }
    }

    
    return () => {
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus()
      }
    }
  }, [isOpen, initialFocus])


  React.useEffect(() => {
    if (!isOpen || !closeOnEsc) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, closeOnEsc])


  React.useEffect(() => {
    if (!isOpen) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!closeOnClickOutside) return
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4",
  }

  if (!isMounted || !isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-description" : undefined}
    >
      <div
        ref={modalRef}
        className={cn(
          "animate-in fade-in-0 zoom-in-95 duration-200 w-full rounded-lg border bg-background shadow-lg",
          sizeClasses[size],
          className,
        )}
        tabIndex={-1}
      >
        <div className={cn("flex flex-col", contentClassName)}>
          {(title || showCloseButton) && (
            <div className={cn("flex items-center justify-between border-b px-6 py-4", headerClassName)}>
              {title && (
                <div>
                  {typeof title === "string" ? (
                    <Heading level={4} id="modal-title" className="text-lg font-semibold">
                      {title}
                    </Heading>
                  ) : (
                    title
                  )}
                  {description && (
                    <div id="modal-description" className="text-sm text-muted-foreground mt-1">
                      {description}
                    </div>
                  )}
                </div>
              )}
              {showCloseButton && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
          <div className={cn("flex-1 px-6 py-4", bodyClassName)}>{children}</div>
          {footer && (
            <div className={cn("flex items-center justify-end space-x-2 border-t px-6 py-4", footerClassName)}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}


export function ModalRoot({
  children,
  ...props
}: Omit<ModalProps, "children"> & {
  children: React.ReactNode
}) {
  return <Modal {...props}>{children}</Modal>
}


export function ModalHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4 border-b", className)} {...props}>
      {children}
    </div>
  )
}


export function ModalBody({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  )
}

export function ModalFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-end space-x-2 border-t px-6 py-4", className)} {...props}>
      {children}
    </div>
  )
}


export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = React.useState(initialState)

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])
  const toggle = React.useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, open, close, toggle }
}

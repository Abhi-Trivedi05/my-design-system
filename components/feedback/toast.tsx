"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Status } from "@/lib/utils"
import { createPortal } from "react-dom"

// Toast Types
export interface Toast {
  id: string
  title?: string
  description?: string
  status?: Status
  duration?: number
  onClose?: () => void
  action?: React.ReactNode
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => string
  removeToast: (id: string) => void
  updateToast: (id: string, toast: Partial<Toast>) => void
}


const ToastContext = createContext<ToastContextType | undefined>(undefined)

let toastFunctions: ToastContextType | undefined = undefined


export function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...toast }
    setToasts((prev) => [...prev, newToast])

    if (toast.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration || 5000)
    }

    return id
  }

  const removeToast = (id: string) => {
    setToasts((prev) => {
      const toast = prev.find((t) => t.id === id)
      toast?.onClose?.()
      return prev.filter((t) => t.id !== id)
    })
  }

  const updateToast = (id: string, toast: Partial<Toast>) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, ...toast } : t)))
  }

  const contextValue = {
    toasts,
    addToast,
    removeToast,
    updateToast,
  }

  toastFunctions = contextValue

  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {isMounted && createPortal(<ToastContainer />, document.body)}
    </ToastContext.Provider>
  )
}

function ToastContainer() {
  const context = useContext(ToastContext)
  if (!context) return null

  const { toasts, removeToast } = context

  if (toasts.length === 0) return null

  return (
    <div
      className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 md:max-w-[420px]"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}


function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const statusIcons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
  }

  const statusClasses = {
    info: "border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-800",
    success: "border-green-500 bg-green-50 dark:bg-green-950 dark:border-green-800",
    warning: "border-amber-500 bg-amber-50 dark:bg-amber-950 dark:border-amber-800",
    error: "border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-800",
  }

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border-l-4 bg-background p-4 shadow-md animate-in slide-in-from-right-full",
        toast.status && statusClasses[toast.status],
      )}
      role="alert"
      aria-live={toast.status === "error" ? "assertive" : "polite"}
    >
      {toast.status && statusIcons[toast.status]}
      <div className="flex-1 space-y-1">
        {toast.title && <div className="font-medium leading-none tracking-tight">{toast.title}</div>}
        {toast.description && <div className="text-sm text-muted-foreground">{toast.description}</div>}
        {toast.action && <div className="mt-2">{toast.action}</div>}
      </div>
      <button
        onClick={onClose}
        className="shrink-0 rounded-md p-1 text-foreground/50 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = {
  show: (props: Omit<Toast, "id">) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return ""
    }
    return toastFunctions.addToast(props)
  },
  info: (props: Omit<Toast, "id" | "status">) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return ""
    }
    return toastFunctions.addToast({ ...props, status: "info" })
  },
  success: (props: Omit<Toast, "id" | "status">) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return ""
    }
    return toastFunctions.addToast({ ...props, status: "success" })
  },
  warning: (props: Omit<Toast, "id" | "status">) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return ""
    }
    return toastFunctions.addToast({ ...props, status: "warning" })
  },
  error: (props: Omit<Toast, "id" | "status">) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return ""
    }
    return toastFunctions.addToast({ ...props, status: "error" })
  },
  update: (id: string, props: Partial<Toast>) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return
    }
    toastFunctions.updateToast(id, props)
  },
  dismiss: (id: string) => {
    if (!toastFunctions) {
      console.warn("Toast provider not mounted yet")
      return
    }
    toastFunctions.removeToast(id)
  },
}

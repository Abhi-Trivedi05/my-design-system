"use client"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Heading, Text } from "@/components/foundation/typography"
import { TextInput } from "@/components/data-entry/text-input"
import { Dropdown } from "@/components/data-entry/dropdown"
import { toast, ToastProvider } from "@/components/feedback/toast"
import { Modal, useModal } from "@/components/feedback/modal"
import { Button } from "@/components/ui/button"
import { Mail, Lock, User } from "lucide-react"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <ToastProvider>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Heading level={4}>Design System</Heading>
              <ThemeToggle />
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <section className="mb-12">
              <Heading level={1} className="mb-4">
                Enterprise Design System
              </Heading>
              <Text size="lg" className="max-w-3xl">
                A comprehensive design system built with React, TypeScript, and TailwindCSS. This system includes
                typography components, data entry components, and feedback components.
              </Text>
            </section>

            <section className="mb-12">
              <Heading level={2} className="mb-6">
                Typography
              </Heading>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-2">
                    Headings
                  </Heading>
                  <div className="space-y-2">
                    <Heading level={1}>Heading 1</Heading>
                    <Heading level={2}>Heading 2</Heading>
                    <Heading level={3}>Heading 3</Heading>
                    <Heading level={4}>Heading 4</Heading>
                    <Heading level={5}>Heading 5</Heading>
                    <Heading level={6}>Heading 6</Heading>
                  </div>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-2">
                    Text Variants
                  </Heading>
                  <div className="space-y-2">
                    <Text size="xs">Extra Small Text</Text>
                    <Text size="sm">Small Text</Text>
                    <Text>Default Text</Text>
                    <Text size="lg">Large Text</Text>
                    <Text size="xl">Extra Large Text</Text>
                    <Text weight="bold">Bold Text</Text>
                    <Text variant="muted">Muted Text</Text>
                    <Text variant="accent">Accent Text</Text>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <Heading level={2} className="mb-6">
                Data Entry
              </Heading>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-4">
                    Text Input
                  </Heading>
                  <div className="space-y-4">
                    <TextInput label="Default Input" placeholder="Enter text here" />
                    <TextInput label="With Icon" placeholder="Enter your email" startIcon={<Mail />} />
                    <TextInput label="Password" type="password" placeholder="Enter password" startIcon={<Lock />} />
                    <TextInput
                      label="With Helper Text"
                      placeholder="Enter username"
                      helperText="Username must be at least 3 characters"
                    />
                    <TextInput
                      label="With Error"
                      placeholder="Enter email"
                      error="Please enter a valid email address"
                    />
                  </div>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-4">
                    Dropdown
                  </Heading>
                  <div className="space-y-4">
                    <Dropdown
                      label="Default Dropdown"
                      placeholder="Select an option"
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                    />
                    <Dropdown
                      label="With Default Value"
                      defaultValue="option2"
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                    />
                    <Dropdown
                      label="With Helper Text"
                      placeholder="Select a role"
                      helperText="Choose the appropriate role for this user"
                      options={[
                        { value: "user", label: "User" },
                        { value: "admin", label: "Administrator" },
                        { value: "editor", label: "Editor" },
                      ]}
                    />
                    <Dropdown
                      label="With Error"
                      placeholder="Select a country"
                      error="Please select a country"
                      options={[
                        { value: "us", label: "United States" },
                        { value: "ca", label: "Canada" },
                        { value: "uk", label: "United Kingdom" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <Heading level={2} className="mb-6">
                Feedback
              </Heading>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-4">
                    Toast Notifications
                  </Heading>
                  <div className="space-y-2">
                    <Button
                      onClick={() =>
                        toast.info({
                          title: "Information",
                          description: "This is an informational message",
                        })
                      }
                      className="w-full"
                    >
                      Show Info Toast
                    </Button>
                    <Button
                      onClick={() =>
                        toast.success({
                          title: "Success",
                          description: "Operation completed successfully",
                        })
                      }
                      className="w-full"
                      variant="outline"
                    >
                      Show Success Toast
                    </Button>
                    <Button
                      onClick={() =>
                        toast.warning({
                          title: "Warning",
                          description: "This action might cause issues",
                        })
                      }
                      className="w-full"
                      variant="outline"
                    >
                      Show Warning Toast
                    </Button>
                    <Button
                      onClick={() =>
                        toast.error({
                          title: "Error",
                          description: "An error occurred during the operation",
                        })
                      }
                      className="w-full"
                      variant="outline"
                    >
                      Show Error Toast
                    </Button>
                    <Button
                      onClick={() =>
                        toast.show({
                          title: "With Action",
                          description: "This toast has action buttons",
                          action: (
                            <div className="flex gap-2 mt-2">
                              <Button size="sm" variant="outline">
                                Action
                              </Button>
                              <Button size="sm" variant="ghost">
                                Dismiss
                              </Button>
                            </div>
                          ),
                        })
                      }
                      className="w-full"
                      variant="outline"
                    >
                      Toast with Action
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <Heading level={3} className="mb-4">
                    Modal Dialogs
                  </Heading>
                  <ModalExamples />
                </div>
              </div>
            </section>

            <section className="mb-12">
              <Heading level={2} className="mb-6">
                Form Example
              </Heading>
              <div className="max-w-md mx-auto p-6 border rounded-lg">
                <Heading level={3} className="mb-6">
                  Sign Up Form
                </Heading>
                <form className="space-y-4">
                  <TextInput label="Full Name" placeholder="John Doe" startIcon={<User />} required />
                  <TextInput label="Email" type="email" placeholder="john@example.com" startIcon={<Mail />} required />
                  <Dropdown
                    label="Role"
                    options={[
                      { value: "user", label: "User" },
                      { value: "admin", label: "Administrator" },
                      { value: "editor", label: "Editor" },
                    ]}
                    placeholder="Select a role"
                    required
                  />
                  <TextInput
                    label="Password"
                    type="password"
                    placeholder="Create a password"
                    startIcon={<Lock />}
                    helperText="Password must be at least 8 characters"
                    required
                  />
                  <Button
                    type="button"
                    className="w-full"
                    onClick={() =>
                      toast.success({
                        title: "Account Created",
                        description: "Your account has been created successfully",
                      })
                    }
                  >
                    Create Account
                  </Button>
                </form>
              </div>
            </section>
          </main>

          <footer className="border-t">
            <div className="container mx-auto px-4 py-6">
              <Text variant="muted" size="sm">
                Enterprise Design System © {new Date().getFullYear()}
              </Text>
            </div>
          </footer>
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

function ModalExamples() {
  const defaultModal = useModal()
  const formModal = useModal()
  const confirmModal = useModal()

  return (
    <div className="space-y-2">
      <Button onClick={defaultModal.open} className="w-full">
        Default Modal
      </Button>
      <Button onClick={formModal.open} className="w-full" variant="outline">
        Form Modal
      </Button>
      <Button onClick={confirmModal.open} className="w-full" variant="outline">
        Confirmation Modal
      </Button>

      <Modal
        isOpen={defaultModal.isOpen}
        onClose={defaultModal.close}
        title="Modal Title"
        description="This is a description of the modal content."
        footer={
          <>
            <Button variant="outline" onClick={defaultModal.close}>
              Cancel
            </Button>
            <Button onClick={defaultModal.close}>Confirm</Button>
          </>
        }
      >
        <div className="py-4">
          <Text>This is the content of the modal.</Text>
        </div>
      </Modal>

      <Modal
        isOpen={formModal.isOpen}
        onClose={formModal.close}
        title="Create New User"
        footer={
          <>
            <Button variant="outline" onClick={formModal.close}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                formModal.close()
                toast.success({
                  title: "User Created",
                  description: "New user has been created successfully",
                })
              }}
            >
              Save User
            </Button>
          </>
        }
      >
        <div className="space-y-4 py-2">
          <TextInput label="Full Name" placeholder="John Doe" required />
          <TextInput label="Email Address" type="email" placeholder="john@example.com" required />
          <Dropdown
            label="Role"
            options={[
              { value: "user", label: "User" },
              { value: "admin", label: "Administrator" },
              { value: "editor", label: "Editor" },
            ]}
            placeholder="Select a role"
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Create a password"
            helperText="Password must be at least 8 characters"
            required
          />
        </div>
      </Modal>

      <Modal
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.close}
        title="Confirm Deletion"
        footer={
          <>
            <Button variant="outline" onClick={confirmModal.close}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                confirmModal.close()
                toast.success({
                  title: "Item Deleted",
                  description: "The item has been permanently deleted",
                })
              }}
            >
              Delete
            </Button>
          </>
        }
      >
        <div className="py-2">
          <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
        </div>
      </Modal>
    </div>
  )
}

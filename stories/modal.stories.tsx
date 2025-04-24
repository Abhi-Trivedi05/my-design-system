"use client"
import type { Meta, StoryObj } from "@storybook/react"
import { Modal, useModal } from "@/components/feedback/modal"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/data-entry/text-input"
import { Dropdown } from "@/components/data-entry/dropdown"
import { Heading, Text } from "@/components/foundation/typography"

const meta: Meta = {
  title: "Feedback/Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const ModalDemo = () => {
      const { isOpen, open, close } = useModal()

      return (
        <>
          <Button onClick={open}>Open Modal</Button>
          <Modal
            isOpen={isOpen}
            onClose={close}
            title="Modal Title"
            description="This is a description of the modal content."
            footer={
              <>
                <Button variant="outline" onClick={close}>
                  Cancel
                </Button>
                <Button onClick={close}>Confirm</Button>
              </>
            }
          >
            <div className="py-4">
              <p>This is the content of the modal.</p>
            </div>
          </Modal>
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Default modal with title, description, content, and footer actions.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => {
    const ModalSizesDemo = () => {
      const smallModal = useModal()
      const mediumModal = useModal()
      const largeModal = useModal()
      const xlModal = useModal()
      const fullModal = useModal()

      return (
        <div className="flex flex-col gap-2">
          <Button variant="outline" onClick={smallModal.open}>
            Small Modal
          </Button>
          <Button variant="outline" onClick={mediumModal.open}>
            Medium Modal
          </Button>
          <Button variant="outline" onClick={largeModal.open}>
            Large Modal
          </Button>
          <Button variant="outline" onClick={xlModal.open}>
            Extra Large Modal
          </Button>
          <Button variant="outline" onClick={fullModal.open}>
            Full Width Modal
          </Button>

          <Modal
            isOpen={smallModal.isOpen}
            onClose={smallModal.close}
            title="Small Modal"
            size="sm"
            footer={<Button onClick={smallModal.close}>Close</Button>}
          >
            <p>This is a small modal dialog.</p>
          </Modal>

          <Modal
            isOpen={mediumModal.isOpen}
            onClose={mediumModal.close}
            title="Medium Modal"
            size="md"
            footer={<Button onClick={mediumModal.close}>Close</Button>}
          >
            <p>This is a medium modal dialog (default size).</p>
          </Modal>

          <Modal
            isOpen={largeModal.isOpen}
            onClose={largeModal.close}
            title="Large Modal"
            size="lg"
            footer={<Button onClick={largeModal.close}>Close</Button>}
          >
            <p>This is a large modal dialog with more space for content.</p>
          </Modal>

          <Modal
            isOpen={xlModal.isOpen}
            onClose={xlModal.close}
            title="Extra Large Modal"
            size="xl"
            footer={<Button onClick={xlModal.close}>Close</Button>}
          >
            <p>This is an extra large modal dialog with even more space for content.</p>
          </Modal>

          <Modal
            isOpen={fullModal.isOpen}
            onClose={fullModal.close}
            title="Full Width Modal"
            size="full"
            footer={<Button onClick={fullModal.close}>Close</Button>}
          >
            <p>This is a full width modal dialog that takes up most of the screen.</p>
          </Modal>
        </div>
      )
    }

    return <ModalSizesDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Modal dialogs in different sizes: small, medium, large, extra large, and full width.",
      },
    },
  },
}

export const WithoutHeader: Story = {
  render: () => {
    const ModalDemo = () => {
      const { isOpen, open, close } = useModal()

      return (
        <>
          <Button onClick={open}>Open Modal Without Header</Button>
          <Modal
            isOpen={isOpen}
            onClose={close}
            showCloseButton={false}
            footer={
              <>
                <Button variant="outline" onClick={close}>
                  Cancel
                </Button>
                <Button onClick={close}>Confirm</Button>
              </>
            }
          >
            <div className="py-4">
              <Heading level={4} className="mb-2">
                Custom Header
              </Heading>
              <Text>
                This modal doesn't use the built-in header, allowing for complete customization of the content area.
              </Text>
            </div>
          </Modal>
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Modal without the default header, allowing for custom header designs within the content area.",
      },
    },
  },
}

export const FormModal: Story = {
  render: () => {
    const ModalDemo = () => {
      const { isOpen, open, close } = useModal()

      return (
        <>
          <Button onClick={open}>Open Form Modal</Button>
          <Modal
            isOpen={isOpen}
            onClose={close}
            title="Create New User"
            footer={
              <>
                <Button variant="outline" onClick={close}>
                  Cancel
                </Button>
                <Button onClick={close}>Save User</Button>
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
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Modal containing a form with various input fields.",
      },
    },
  },
}

export const ConfirmationModal: Story = {
  render: () => {
    const ModalDemo = () => {
      const { isOpen, open, close } = useModal()

      return (
        <>
          <Button variant="destructive" onClick={open}>
            Delete Item
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={close}
            title="Confirm Deletion"
            footer={
              <>
                <Button variant="outline" onClick={close}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={close}>
                  Delete
                </Button>
              </>
            }
          >
            <div className="py-2">
              <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
            </div>
          </Modal>
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Confirmation modal for destructive actions like deletion.",
      },
    },
  },
}

export const NestedModals: Story = {
  render: () => {
    const ModalDemo = () => {
      const firstModal = useModal()
      const secondModal = useModal()

      return (
        <>
          <Button onClick={firstModal.open}>Open First Modal</Button>

          <Modal
            isOpen={firstModal.isOpen}
            onClose={firstModal.close}
            title="First Modal"
            footer={
              <>
                <Button variant="outline" onClick={firstModal.close}>
                  Close
                </Button>
                <Button onClick={secondModal.open}>Open Second Modal</Button>
              </>
            }
          >
            <div className="py-2">
              <Text>This is the first modal. You can open another modal from here.</Text>
            </div>
          </Modal>

          <Modal
            isOpen={secondModal.isOpen}
            onClose={secondModal.close}
            title="Second Modal"
            footer={<Button onClick={secondModal.close}>Close</Button>}
          >
            <div className="py-2">
              <Text>This is the second modal, opened from the first one.</Text>
            </div>
          </Modal>
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstration of nested modals, where one modal can open another.",
      },
    },
  },
}

export const ModalWithRichContent: Story = {
  render: () => {
    const ModalDemo = () => {
      const { isOpen, open, close } = useModal()

      return (
        <>
          <Button onClick={open}>View Product Details</Button>
          <Modal
            isOpen={isOpen}
            onClose={close}
            title="Product Details"
            size="lg"
            footer={<Button onClick={close}>Close</Button>}
          >
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 bg-muted rounded-md aspect-square flex items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <Heading level={3}>Premium Wireless Headphones</Heading>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 fill-amber-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(128 reviews)</span>
                  </div>
                  <Text className="text-2xl font-bold">$299.99</Text>
                  <Text>
                    Experience premium sound quality with these wireless headphones. Featuring active noise
                    cancellation, 30-hour battery life, and comfortable over-ear design.
                  </Text>
                  <div className="space-y-2">
                    <Text className="font-medium">Available Colors:</Text>
                    <div className="flex gap-2">
                      {["bg-black", "bg-white border", "bg-blue-500", "bg-red-500"].map((color, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full ${color}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Heading level={4} className="mb-2">
                  Specifications
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">Battery Life</span>
                    <span>30 hours</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">Connectivity</span>
                    <span>Bluetooth 5.0</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">Noise Cancellation</span>
                    <span>Active</span>
                  </div>
                  <div className="flex justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">Weight</span>
                    <span>250g</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )
    }

    return <ModalDemo />
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with rich, structured content like a product details page.",
      },
    },
  },
}

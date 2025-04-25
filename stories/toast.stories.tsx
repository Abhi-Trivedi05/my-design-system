"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { toast, ToastProvider, useToast } from "@/components/feedback/toast";
import { Button } from "@/components/ui/button";

// Define the Meta with argTypes for toast options
const meta: Meta = {
  title: "Feedback/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the toast notification",
      defaultValue: "Notification",
    },
    description: {
      control: "text",
      description: "The description text of the toast",
      defaultValue: "This is a toast notification.",
    },
    status: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "The status variant of the toast",
      defaultValue: "info",
    },
    duration: {
      control: "number",
      description: "The duration (in milliseconds) the toast is displayed. Use Infinity for persistent toasts.",
      defaultValue: 5000,
    },
    action: {
      control: false, // Actions are React nodes, not easily controllable
      description: "Custom action buttons or content for the toast",
    },
  },
};

export default meta;
type Story = StoryObj;

// StatusVariants with controls for a single toast
export const StatusVariants: Story = {
  args: {
    title: "Notification",
    description: "This is a toast notification.",
    status: "info",
    duration: 5000,
  },
  render: ({ title, description, status, duration }) => {
    const ToastDemo = () => {
      return (
        <div className="flex flex-col gap-2">
          <Button
            onClick={() =>
              toast[status]({
                title,
                description,
                duration,
              })
            }
            variant="outline"
          >
            Show {status.charAt(0).toUpperCase() + status.slice(1)} Toast
          </Button>
          {/* Keep other buttons to demonstrate all variants */}
          <Button
            onClick={() =>
              toast.info({
                title: "Information",
                description: "This is an informational message",
              })
            }
            variant="outline"
          >
            Info Toast
          </Button>
          <Button
            onClick={() =>
              toast.success({
                title: "Success",
                description: "Operation completed successfully",
              })
            }
            variant="outline"
          >
            Success Toast
          </Button>
          <Button
            onClick={() =>
              toast.warning({
                title: "Warning",
                description: "This action might cause issues",
              })
            }
            variant="outline"
          >
            Warning Toast
          </Button>
          <Button
            onClick={() =>
              toast.error({
                title: "Error",
                description: "An error occurred during the operation",
              })
            }
            variant="outline"
          >
            Error Toast
          </Button>
        </div>
      );
    };

    return <ToastDemo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Toast notifications with different status variants. Use the controls to customize the title, description, status, and duration of the first toast.",
      },
    },
  },
};

// WithAction with controls
export const WithAction: Story = {
  args: {
    title: "Update Available",
    description: "A new version is available. Would you like to update now?",
    duration: 10000,
  },
  render: ({ title, description, duration }) => {
    const ToastDemo = () => {
      const showToast = () => {
        toast.show({
          title,
          description,
          duration,
          action: (
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  toast.success({ title: "Updated", description: "Application has been updated successfully" })
                }
              >
                Update
              </Button>
              <Button size="sm" variant="ghost">
                Later
              </Button>
            </div>
          ),
        });
      };

      return <Button onClick={showToast}>Show Toast with Action</Button>;
    };

    return <ToastDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: "Toast notification with action buttons. Customize the title, description, and duration using the controls.",
      },
    },
  },
};

// CustomDuration with controls
export const CustomDuration: Story = {
  args: {
    title: "Custom Toast",
    description: "This toast has a custom duration.",
    duration: 5000,
  },
  render: ({ title, description, duration }) => {
    const ToastDemo = () => {
      return (
        <div className="flex flex-col gap-2">
          <Button
            onClick={() =>
              toast.show({
                title,
                description,
                duration,
              })
            }
            variant="outline"
          >
            Custom Duration Toast
          </Button>
          <Button
            onClick={() =>
              toast.show({
                title: "Quick Toast",
                description: "This toast will disappear in 2 seconds",
                duration: 2000,
              })
            }
            variant="outline"
          >
            Short Duration (2s)
          </Button>
          <Button
            onClick={() =>
              toast.show({
                title: "Persistent Toast",
                description: "This toast will stay until dismissed",
                duration: Number.POSITIVE_INFINITY,
              })
            }
            variant="outline"
          >
            Persistent Toast
          </Button>
        </div>
      );
    };

    return <ToastDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: "Toast notifications with custom durations. Use the controls to customize the first toast's title, description, and duration.",
      },
    },
  },
};

// MultipleToasts (controls for the first toast)
export const MultipleToasts: Story = {
  args: {
    title: "Process Started",
    description: "Your request is being processed",
    status: "info",
    duration: 5000,
  },
  render: ({ title, description, status, duration }) => {
    const ToastDemo = () => {
      const showMultipleToasts = () => {
        toast[status]({
          title,
          description,
          duration,
        });

        setTimeout(() => {
          toast.success({
            title: "Step 1 Complete",
            description: "First step completed successfully",
          });
        }, 1000);

        setTimeout(() => {
          toast.success({
            title: "Step 2 Complete",
            description: "Second step completed successfully",
          });
        }, 2000);

        setTimeout(() => {
          toast.success({
            title: "Process Complete",
            description: "All steps completed successfully",
          });
        }, 3000);
      };

      return <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>;
    };

    return <ToastDemo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrating how multiple toast notifications stack and appear in sequence. Customize the first toast's title, description, status, and duration using the controls.",
      },
    },
  },
};

// ToastUsageExample (controls for the initial toast)
export const ToastUsageExample: Story = {
  args: {
    title: "Uploading File",
    description: "Starting upload process...",
    duration: Number.POSITIVE_INFINITY,
  },
  render: ({ title, description, duration }) => {
    const ToastDemo = () => {
      const showProgressToast = () => {
        const id = toast.info({
          title,
          description,
          duration,
        });

        // Simulate progress updates
        setTimeout(() => {
          toast.update(id, {
            description: "Uploading: 25% complete",
          });
        }, 1000);

        setTimeout(() => {
          toast.update(id, {
            description: "Uploading: 50% complete",
          });
        }, 2000);

        setTimeout(() => {
          toast.update(id, {
            description: "Uploading: 75% complete",
          });
        }, 3000);

        setTimeout(() => {
          toast.update(id, {
            title: "Upload Complete",
            description: "Your file has been uploaded successfully",
            status: "success",
            duration: 3000,
          });
        }, 4000);
      };

      return (
        <div className="p-6 border rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">File Upload Example</h2>
          <div className="flex items-center gap-2">
            <Button onClick={showProgressToast}>Upload File</Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error({
                  title: "Upload Failed",
                  description: "There was an error uploading your file. Please try again.",
                })
              }
            >
              Simulate Error
            </Button>
          </div>
        </div>
      );
    };

    return <ToastDemo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "A practical example showing how toasts can be used in a file upload scenario with progress updates. Customize the initial toast's title, description, and duration using the controls.",
      },
    },
  },
};
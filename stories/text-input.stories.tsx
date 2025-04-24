import type { Meta, StoryObj } from "@storybook/react"
import { TextInput } from "@/components/data-entry/text-input"
import { Mail, Lock, Search, User } from "lucide-react"

const meta: Meta<typeof TextInput> = {
  title: "Data Entry/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url", "search"],
    },
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    label: "Label",
  },
}

export const WithHelperText: Story = {
  args: {
    placeholder: "Enter text",
    label: "Label",
    helperText: "This is a helper text",
  },
}

export const WithError: Story = {
  args: {
    placeholder: "Enter text",
    label: "Label",
    error: "This field is required",
  },
}

export const WithStartIcon: Story = {
  args: {
    placeholder: "Enter your email",
    label: "Email",
    startIcon: <Mail />,
  },
}

export const WithEndIcon: Story = {
  args: {
    placeholder: "Search...",
    endIcon: <Search />,
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    label: "Password",
    startIcon: <Lock />,
  },
}

export const Clearable: Story = {
  args: {
    placeholder: "Enter text",
    label: "Clearable input",
    clearable: true,
    defaultValue: "This can be cleared",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    label: "Disabled",
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    placeholder: "Required field",
    label: "Required field",
    required: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextInput size="sm" label="Small" placeholder="Small input" />
      <TextInput size="md" label="Medium (default)" placeholder="Medium input" />
      <TextInput size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
}

export const FullWidth: Story = {
  args: {
    placeholder: "Full width input",
    label: "Full width",
    fullWidth: true,
  },
}

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextInput type="text" label="Text" placeholder="Text input" />
      <TextInput type="email" label="Email" placeholder="Email input" />
      <TextInput type="password" label="Password" placeholder="Password input" />
      <TextInput type="number" label="Number" placeholder="Number input" />
      <TextInput type="tel" label="Telephone" placeholder="Telephone input" />
      <TextInput type="url" label="URL" placeholder="URL input" />
      <TextInput type="search" label="Search" placeholder="Search input" />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-96 p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Sign Up Form</h2>
      <TextInput label="Full Name" placeholder="John Doe" startIcon={<User />} required />
      <TextInput label="Email" type="email" placeholder="john@example.com" startIcon={<Mail />} required />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter a secure password"
        startIcon={<Lock />}
        helperText="Password must be at least 8 characters"
        required
      />
      <button className="w-full mt-2 py-2 px-4 bg-primary text-primary-foreground rounded-md">Create Account</button>
    </div>
  ),
}

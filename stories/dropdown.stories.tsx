import type { Meta, StoryObj } from "@storybook/react"
import { Dropdown } from "@/components/data-entry/dropdown"

const meta: Meta<typeof Dropdown> = {
  title: "Data Entry/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
]

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
    label: "Label",
  },
}

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    defaultValue: "option2",
    label: "With default value",
  },
}

export const WithHelperText: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
    label: "Label",
    helperText: "This is a helper text",
  },
}

export const WithError: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
    label: "Label",
    error: "Please select an option",
  },
}

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
    label: "Disabled dropdown",
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Select an option",
    label: "Required field",
    required: true,
  },
}

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4", disabled: true },
      { value: "option5", label: "Option 5" },
    ],
    placeholder: "Select an option",
    label: "With disabled options",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Dropdown options={defaultOptions} size="sm" label="Small" placeholder="Small dropdown" />
      <Dropdown options={defaultOptions} size="md" label="Medium (default)" placeholder="Medium dropdown" />
      <Dropdown options={defaultOptions} size="lg" label="Large" placeholder="Large dropdown" />
    </div>
  ),
}

export const FullWidth: Story = {
  args: {
    options: defaultOptions,
    placeholder: "Full width dropdown",
    label: "Full width",
    fullWidth: true,
  },
}

export const CountrySelector: Story = {
  render: () => (
    <div className="w-80">
      <Dropdown
        options={[
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "uk", label: "United Kingdom" },
          { value: "au", label: "Australia" },
          { value: "de", label: "Germany" },
          { value: "fr", label: "France" },
          { value: "jp", label: "Japan" },
          { value: "cn", label: "China" },
          { value: "in", label: "India" },
          { value: "br", label: "Brazil" },
        ]}
        label="Country"
        placeholder="Select your country"
        required
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-96 p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Product Filter</h2>
      <Dropdown
        options={[
          { value: "all", label: "All Categories" },
          { value: "electronics", label: "Electronics" },
          { value: "clothing", label: "Clothing" },
          { value: "books", label: "Books" },
          { value: "home", label: "Home & Kitchen" },
        ]}
        label="Category"
        placeholder="Select a category"
      />
      <Dropdown
        options={[
          { value: "price_asc", label: "Price: Low to High" },
          { value: "price_desc", label: "Price: High to Low" },
          { value: "newest", label: "Newest First" },
          { value: "rating", label: "Highest Rated" },
        ]}
        label="Sort By"
        defaultValue="newest"
      />
      <Dropdown
        options={[
          { value: "in_stock", label: "In Stock" },
          { value: "out_of_stock", label: "Out of Stock" },
          { value: "all", label: "All" },
        ]}
        label="Availability"
        defaultValue="in_stock"
      />
      <button className="w-full mt-2 py-2 px-4 bg-primary text-primary-foreground rounded-md">Apply Filters</button>
    </div>
  ),
}

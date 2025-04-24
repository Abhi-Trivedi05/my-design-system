import type { Meta, StoryObj } from "@storybook/react"
import { Heading, Text, Label, Caption, HelperText } from "@/components/foundation/typography"

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Heading components from H1 to H6 with appropriate styling for each level.",
      },
    },
  },
}

export const TextVariants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="base">Base Text (Default)</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
      <Text size="2xl">2XL Text</Text>
      <Text size="3xl">3XL Text</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text component with different size variants.",
      },
    },
  },
}

export const TextWeights: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Text weight="normal">Normal Weight Text</Text>
      <Text weight="medium">Medium Weight Text</Text>
      <Text weight="semibold">Semibold Weight Text</Text>
      <Text weight="bold">Bold Weight Text</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text component with different font weight variants.",
      },
    },
  },
}

export const TextColors: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Text variant="default">Default Text Color</Text>
      <Text variant="muted">Muted Text Color</Text>
      <Text variant="accent">Accent Text Color</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text component with different color variants.",
      },
    },
  },
}

export const Labels: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Label size="sm">Small Label</Label>
      <Label size="base">Base Label (Default)</Label>
      <Label size="lg">Large Label</Label>
      <Label required>Required Label</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label component with different size variants and required state.",
      },
    },
  },
}

export const Captions: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Caption size="xs">Extra Small Caption</Caption>
      <Caption size="sm">Small Caption (Default)</Caption>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Caption component with different size variants.",
      },
    },
  },
}

export const HelperTexts: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <HelperText status="default">Default Helper Text</HelperText>
      <HelperText status="error">Error Helper Text</HelperText>
      <HelperText status="success">Success Helper Text</HelperText>
      <HelperText status="warning">Warning Helper Text</HelperText>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Helper Text component with different status variants.",
      },
    },
  },
}

export const TypographySystem: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Heading level={2} className="mb-4">
          Typography System
        </Heading>
        <Text>
          This design system provides a comprehensive set of typography components that can be used to create consistent
          and accessible text hierarchies in your application.
        </Text>
      </div>

      <div>
        <Heading level={3} className="mb-2">
          Headings
        </Heading>
        <Text className="mb-4">Use heading components to create clear content hierarchy.</Text>
        <div className="space-y-2">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>
      </div>

      <div>
        <Heading level={3} className="mb-2">
          Text
        </Heading>
        <Text className="mb-4">
          The Text component is versatile and can be customized with different sizes, weights, and colors.
        </Text>
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

      <div>
        <Heading level={3} className="mb-2">
          Form Elements
        </Heading>
        <Text className="mb-4">Typography components for forms include Labels and Helper Text.</Text>
        <div className="space-y-4">
          <div>
            <Label htmlFor="example-input" required>
              Form Label
            </Label>
            <div className="h-10 w-full rounded-md border border-input bg-background mt-1"></div>
            <HelperText>Helper text provides additional context</HelperText>
          </div>
          <div>
            <Label htmlFor="example-input-error">Another Label</Label>
            <div className="h-10 w-full rounded-md border border-destructive bg-background mt-1"></div>
            <HelperText status="error">Error message appears in red</HelperText>
          </div>
        </div>
      </div>

      <div>
        <Heading level={3} className="mb-2">
          Captions
        </Heading>
        <Text className="mb-4">Use captions for supplementary information.</Text>
        <div className="space-y-2">
          <div className="rounded-md border border-input overflow-hidden">
            <div className="h-40 bg-muted"></div>
            <div className="p-2">
              <Caption>Image caption example</Caption>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A comprehensive showcase of the typography system.",
      },
    },
  },
}

import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text, Label, Caption, HelperText } from "@/components/foundation/typography";

// Define the Meta with argTypes for all typography components
const meta: Meta = {
  title: "Foundation/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Heading props
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "The heading level (1 to 6)",
      defaultValue: 1,
      table: {
        category: "Heading",
      },
    },
    // Text props
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
      description: "The size of the text",
      defaultValue: "base",
      table: {
        category: "Text",
      },
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
      description: "The font weight of the text",
      defaultValue: "normal",
      table: {
        category: "Text",
      },
    },
    variant: {
      control: "select",
      options: ["default", "muted", "accent"],
      description: "The color variant of the text",
      defaultValue: "default",
      table: {
        category: "Text",
      },
    },
    // Label props
    labelSize: {
      control: "select",
      options: ["sm", "base", "lg"],
      description: "The size of the label",
      defaultValue: "base",
      table: {
        category: "Label",
      },
    },
    required: {
      control: "boolean",
      description: "Whether the label indicates a required field",
      defaultValue: false,
      table: {
        category: "Label",
      },
    },
    // Caption prudps
    captionSize: {
      control: "select",
      options: ["xs", "sm"],
      description: "The size of the caption",
      defaultValue: "sm",
      table: {
        category: "Caption",
      },
    },
    // HelperText props
    status: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "The status variant of the helper text",
      defaultValue: "default",
      table: {
        category: "HelperText",
      },
    },
    children: {
      control: "text",
      description: "The content of the typography component",
      defaultValue: "Sample Text",
      table: {
        category: "Common",
      },
    },
  },
};

export default meta;

// Headings with controls
export const Headings: StoryObj = {
  args: {
    level: 1,
    children: "Heading",
  },
  render: ({ level, children }) => (
    <div className="space-y-4">
      <Heading level={level}>{children}</Heading>
      {/* Keep other headings for reference */}
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
        story: "Heading components from H1 to H6. Use the controls to customize the level and content of the first heading.",
      },
    },
  },
};

// TextVariants with controls
export const TextVariants: StoryObj = {
  args: {
    size: "base",
    children: "Text",
  },
  render: ({ size, children }) => (
    <div className="space-y-4">
      <Text size={size}>{children}</Text>
      {/* Keep other sizes for reference */}
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
        story: "Text component with different size variants. Use the controls to customize the size and content of the first text.",
      },
    },
  },
};

// TextWeights with controls
export const TextWeights: StoryObj = {
  args: {
    weight: "normal",
    children: "Text",
  },
  render: ({ weight, children }) => (
    <div className="space-y-4">
      <Text weight={weight}>{children}</Text>
      {/* Keep other weights for reference */}
      <Text weight="normal">Normal Weight Text</Text>
      <Text weight="medium">Medium Weight Text</Text>
      <Text weight="semibold">Semibold Weight Text</Text>
      <Text weight="bold">Bold Weight Text</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text component with different font weight variants. Use the controls to customize the weight and content of the first text.",
      },
    },
  },
};

// TextColors with controls
export const TextColors: StoryObj = {
  args: {
    variant: "default",
    children: "Text",
  },
  render: ({ variant, children }) => (
    <div className="space-y-4">
      <Text variant={variant}>{children}</Text>
      {/* Keep other variants for reference */}
      <Text variant="default">Default Text Color</Text>
      <Text variant="muted">Muted Text Color</Text>
      <Text variant="accent">Accent Text Color</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text component with different color variants. Use the controls to customize the color and content of the first text.",
      },
    },
  },
};

// Labels with controls
export const Labels: StoryObj = {
  args: {
    labelSize: "base",
    required: false,
    children: "Label",
  },
  render: ({ labelSize, required, children }) => (
    <div className="space-y-4">
      <Label size={labelSize} required={required}>
        {children}
      </Label>
      {/* Keep other labels for reference */}
      <Label size="sm">Small Label</Label>
      <Label size="base">Base Label (Default)</Label>
      <Label size="lg">Large Label</Label>
      <Label required>Required Label</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label component with different size variants and required state. Use the controls to customize the size, required state, and content of the first label.",
      },
    },
  },
};

// Captions with controls
export const Captions: StoryObj = {
  args: {
    captionSize: "sm",
    children: "Caption",
  },
  render: ({ captionSize, children }) => (
    <div className="space-y-4">
      <Caption size={captionSize}>{children}</Caption>
      {/* Keep other captions for reference */}
      <Caption size="xs">Extra Small Caption</Caption>
      <Caption size="sm">Small Caption (Default)</Caption>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Caption component with different size variants. Use the controls to customize the size and content of the first caption.",
      },
    },
  },
};

// HelperTexts with controls
export const HelperTexts: StoryObj = {
  args: {
    status: "default",
    children: "Helper Text",
  },
  render: ({ status, children }) => (
    <div className="space-y-4">
      <HelperText status={status}>{children}</HelperText>
      {/* Keep other helper texts for reference */}
      <HelperText status="default">Default Helper Text</HelperText>
      <HelperText status="error">Error Helper Text</HelperText>
      <HelperText status="success">Success Helper Text</HelperText>
      <HelperText status="warning">Warning Helper Text</HelperText>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Helper Text component with different status variants. Use the controls to customize the status and content of the first helper text.",
      },
    },
  },
};

// TypographySystem with controls (focusing on one component, e.g., Heading)
export const TypographySystem: StoryObj = {
  args: {
    level: 2,
    children: "Typography System",
  },
  render: ({ level, children }) => (
    <div className="space-y-8">
      <div>
        <Heading level={level} className="mb-4">
          {children}
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
        story:
          "A comprehensive showcase of the typography system. Use the controls to customize the level and content of the main heading.",
      },
    },
  },
};
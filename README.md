# Enterprise Design System

A comprehensive design system built with React, TypeScript, and TailwindCSS. This system includes typography components, data entry components, and feedback components.

## Features

- 🎨 **Theme Provider** with dark/light modes
- 📝 **Typography System** with headings, text variants, labels, and helper text
- 📊 **Data Entry Components** including TextInput and Dropdown
- 🔔 **Feedback Components** including Toast and Modal
- 📱 **Responsive Design** with mobile-first approach
- ♿ **Accessibility** following WCAG 2.1 guidelines
- 📚 **Storybook Documentation** for all components

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/enterprise-design-system.git
cd enterprise-design-system
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view the demo in your browser.

## Storybook

To run Storybook and view component documentation:

\`\`\`bash
npm run storybook
# or
yarn storybook
\`\`\`

This will start Storybook on [http://localhost:6006](http://localhost:6006).

## Component Documentation

### Typography System

The typography system includes:

- **Heading**: H1-H6 components with appropriate styling
- **Text**: Customizable text component with various sizes, weights, and colors
- **Label**: Form label component with required state support
- **Caption**: Small text for supplementary information
- **HelperText**: Form helper text with status variants

### Data Entry Components

#### TextInput

A versatile input component with features like:

- Label and helper text
- Error state
- Start and end icons
- Password visibility toggle
- Clearable option
- Different sizes
- Full width support

#### Dropdown

A dropdown/select component with:

- Label and helper text
- Error state
- Default value support
- Disabled options
- Different sizes
- Full width support

### Feedback Components

#### Toast

A toast notification system with:

- Different status variants (info, success, warning, error)
- Customizable duration
- Action buttons
- Programmatic API

#### Modal

A modal dialog component with:

- Different sizes
- Custom header and footer
- Form support
- Nested modals
- Accessibility features

## Accessibility

All components follow WCAG 2.1 guidelines:

- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Color contrast
- Screen reader support

## Project Structure

\`\`\`
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── foundation/       # Base components like Typography
│   ├── data-entry/       # Input components
│   ├── feedback/         # Feedback components
│   ├── theme/            # Theme provider and related utilities
├── lib/                  # Utility functions
├── stories/              # Storybook stories
├── .storybook/           # Storybook configuration
├── public/               # Static assets
└── README.md             # Project documentation
\`\`\`

## Best Practices

### Typography

- Use the appropriate heading level for document structure
- Maintain consistent text styles throughout the application
- Use muted text for secondary information

### Forms

- Always include labels for form fields
- Use helper text to provide additional context
- Display clear error messages
- Make required fields visually distinct

### Feedback

- Use toast notifications for non-disruptive feedback
- Use modals for important actions that require user attention
- Ensure all feedback components are accessible

## License

This project is licensed under the MIT License - see the LICENSE file for details.

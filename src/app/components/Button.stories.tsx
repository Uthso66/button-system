import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "ghost",
        "outline",
        "success",
        "warning",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Primary Button Story
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

// All Variants Story
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// With Icon Story
export const WithIcon: Story = {
  args: {
    children: "Send Email",
    variant: "primary",
    icon: "📧",
  },
};

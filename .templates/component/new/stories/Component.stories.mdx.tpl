---
to: src/components/<%= name %>/stories/<%= name %>.stories.mdx
---
import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';
import <%= name %> from '..';

<Meta title="Components/<%= name %>" />

<Story name="Import" />

# <%= name %>

## Import

```jsx
import { <%= name %> } from '@qnt/ui';
```

<Story name="Props" />

## Props

<Props of={<%= name %>} />

## Usage

### Default

<Preview withToolbar>
  <Story name="Default">
    <>
      <<%= name %> />
    </>
  </Story>
</Preview>

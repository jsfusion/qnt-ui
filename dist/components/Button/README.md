# Button

Buttons are used to make common actions immediately visible and easy to perform with one click, tap, or keypress.

## Usage

```js
import { Button } from '@app/components';
```

```jsx
<Button>Button label</Button>
```

## Prop Types

**varient** `enum`<br />
One of <**`primary`**, `secondary`><br />
The base styling to apply to the button

---

**size** `enum`<br />
One of <`small`, **`medium`**, `large`><br />
The size of the button

---

**isDisabled** `boolean` = *false*<br />
Whether this action is non-interactive.

---

**onClick** `function`<br />
HTML `type` attribute of button

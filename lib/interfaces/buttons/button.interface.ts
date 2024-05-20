/**
 * Represents the structure of an object that represents a button.
 * @interface iButton
 * @property {string} [content] - The text content of the button.
 * @property {() => void} onClick - The function to be executed when the button is clicked.
 * @property {'left' | 'right'} [iconPosition] - The position of an icon on the button. Can be 'left' or 'right'.
 * @property {string} [icon] - The URL or path of an icon to be displayed on the button.
 * @property {boolean} [disabled] - When set to true, disables the button.
 * @property {'button' | 'submit' | 'reset'} [type] - The type of the button. Can be 'button', 'submit', or 'reset'.
 */
export interface iButton {
  content?: string;
  onClick?: () => void;
  iconPosition?: "left" | "right";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  disabled?: boolean;
  type: "Primary" | "Destructive" | "Safe" | "Warning" | "Info";
}

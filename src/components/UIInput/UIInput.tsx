import { ChangeEventHandler, FC } from "react";
import style from './UIInput.module.css'

const UIInput: FC<{
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string,
  disabled?: boolean,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
  placeholder?: string,
}> = ({ value, onChange, className, disabled, onKeyDown, placeholder }) => {
  const classNames = [style.input];

  if (className) {
    classNames.push(className);
  }

  if (disabled) {
    classNames.push(style.disabled)
  }

  return <input placeholder={placeholder} onKeyDown={onKeyDown} disabled={disabled} className={classNames.join(' ')} value={value} onChange={onChange} />
}

export default UIInput;


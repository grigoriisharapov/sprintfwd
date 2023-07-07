import { FC } from "react";
import style from './UIButton.module.css';

const UIButton: FC<{
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}> = ({ onClick, disabled, children, className }) => {
  const classNames = [style.button];

  if (className) {
    classNames.push(className);
  }

  if (disabled) {
    classNames.push(style.disabled)
  }

  return <button className={classNames.join(' ')} disabled={disabled} onClick={() => onClick()}>{children}</button>
}

export default UIButton;

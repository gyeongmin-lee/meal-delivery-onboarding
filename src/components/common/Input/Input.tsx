import classNames from "classnames";
import React, { FC, InputHTMLAttributes, useRef, useState } from "react";
import "./Input.scss";

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
interface InputProps extends CustomInputProps {
  lockedValue?: string;
  isPassword?: boolean;
}

export const Input: FC<InputProps> = ({
  lockedValue,
  placeholder,
  isPassword = false,
  ...props
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={classNames("finput", {
        "finput--focused": isFocused,
        "finput--disabled": !!lockedValue,
      })}
      onClick={() => ref.current?.focus()}
    >
      {(value || lockedValue) && (
        <div className="finput-label">{placeholder}</div>
      )}
      <input
        ref={ref}
        className="finput-input"
        value={!!lockedValue ? lockedValue : value}
        onChange={(e) => !lockedValue && setValue(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={!!lockedValue}
        type={isPassword ? "password" : "text"}
        {...props}
      />
    </div>
  );
};

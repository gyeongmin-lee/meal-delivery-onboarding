import classNames from "classnames";
import React, { FC, InputHTMLAttributes, useState } from "react";
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

  return (
    <div
      className={classNames("finput", {
        "finput--focused": isFocused,
        "finput--disabled": !!lockedValue,
      })}
    >
      {(value || lockedValue) && (
        <div className="finput-label">{placeholder}</div>
      )}
      <input
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

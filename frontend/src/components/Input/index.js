import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={rest.id}> {rest.label} </label>
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />
    </>
  );
}

export default Input;

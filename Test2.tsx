import * as React from 'react';

const Child = React.forwardRef<unknown, { label: string }>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>();
  const input2Ref = React.useRef<HTMLInputElement>();
  const focusRef = React.useRef<number>();

  React.useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
      unfocus: () => {
        if (focusRef.current === 2) {
          focusRef.current = 1;
          inputRef.current.focus();
        } else {
          focusRef.current = 2;
          input2Ref.current.focus();
        }
      },
    }),
    [focus]
  );

  return (
    <div>
      <input ref={inputRef} />
      <input ref={input2Ref} />
    </div>
  );
});

export default function Test2() {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>();
  const labelRef = React.useRef<HTMLLabelElement>();
  const buttonRef = React.useRef<HTMLButtonElement>();
  const valueRef = React.useRef();

  return (
    <div>
      <h4>Test 2</h4>
      <div>{valueRef.current}</div>
      <Child
        label={value}
        ref={inputRef}
        onValueChanges={(v) => {
          valueRef.current = v;
        }}
      />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <button onClick={() => inputRef.current.unfocus()}>unfocus</button>
    </div>
  );
}

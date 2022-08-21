import * as React from 'react';
import './style.css';

export default function Test1() {
  // const [value1, setValue1] = React.useState('');
  // const [value2, setValue2] = React.useState('');
  // const input1 = React.useRef<HTMLInputElement>();
  // const input2 = React.useRef<HTMLInputElement>();
  // const count = React.useRef(0);

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>();

  // React.useEffect(() => {
  //   if (value1.length > 2) {
  //     input2.current.focus();
  //   }
  // }, [value1]);

  return (
    <div>
      {/* <h4>
        Test 1 {value1}:{value2}
      </h4>
        <input
          ref={input1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          ref={input2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        /> */}
      <h4>Test 1</h4>
      <input
        value={value}
        onChange={(e) => {
          const x = e.target.value;
          if (x.length > 2) {
            inputRef.current.focus();
          }
          setValue(e.target.value);
        }}
      />
      <input ref={inputRef} />
    </div>
  );
}

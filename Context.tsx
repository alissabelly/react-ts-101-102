import * as React from 'react';

// this is my context
const UserContext = React.createContext(undefined);

function Child3() {
  return (
    <UserContext.Consumer>
      {(props) => {
        return (
          <div style={{ border: '2px solid blue', margin: '4px 0' }}>
            <div> child 3 </div>
            <div>{props.name}</div>
            <input
              value={props.name}
              onChange={(e) => props.setValue(e.target.value)}
            />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Child2() {
  return (
    <div>
      <div> child 2 </div>
      <Child3 />
    </div>
  );
}

function Child1() {
  return (
    <div>
      <div> child1 </div>
      <Child2 />
    </div>
  );
}

const Child1Memo = React.memo(Child1);

export default function Context() {
  const [value, setValue] = React.useState<string>();
  return (
    <div>
      <h3>Context</h3>
      <UserContext.Provider value={{ name: value, setValue: setValue }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <Child1Memo />
      </UserContext.Provider>
    </div>
  );
}

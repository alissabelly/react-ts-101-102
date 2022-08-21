import * as React from 'react';

const ChildComponent = (props) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div
      style={{
        border: '1px solid orange',
        marginTop: '10px',
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: 'gray',
          borderBottom: '1px solid pink',
        }}
      >
        {props.title}
      </div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.children(value)}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ margin: '5rem 0 0' }}>
      <ChildComponent title="title">
        {(value) => {
          return <h1>{value}</h1>;
        }}
      </ChildComponent>
    </div>
  );
}

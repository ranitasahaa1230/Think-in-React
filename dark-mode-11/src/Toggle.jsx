export default function Toggle({ value, setValue }) {
  return <button onClick={() => setValue((value) => !value)}>Toggle</button>;
}

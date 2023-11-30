import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Increase icon="+"></Counter.Increase>
        <Counter.Count />
        <Counter.Decrease icon="-"></Counter.Decrease>
      </Counter>

      <div>
        <Counter>
          <Counter.Label>My super flexible counter 2</Counter.Label>
          <Counter.Increase icon="🤏"></Counter.Increase>
          <Counter.Count />
          <Counter.Decrease icon="😪"></Counter.Decrease>
        </Counter>
      </div>
    </div>
  );
}

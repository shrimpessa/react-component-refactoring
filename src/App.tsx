import React from 'react';
import { SimpleComponent } from "./SimpleComponent";

const App = () => {
  const componentRerenderedTimes = React.useRef(0);
  const [data, setData] = React.useState(
      new Array(1000)
          .fill({ number: 0 })
          .map((item, index) => ({ number: item.number, id: String(index + 1) }))
  );

    const random = () => {
        setData(
            data.map(({id}) => ({ number: Math.floor(1 + Math.random() * 10), id }))
        );
    }

    const onClickAddToTop = () => {
        setData(data => [ { number: 0 , id: Math.random().toString() }, ...data]);
    }

  return (
      <div>
        <div>Was rendered: {componentRerenderedTimes.current}</div>
        <button onClick={random}>random</button>
        <button onClick={onClickAddToTop}>add to top</button>
        {data.map(item => (
            <SimpleComponent
                key={item.id}
                number={item.number}
                componentRerenderedTimes={componentRerenderedTimes}
            />
        ))}
      </div>
  );
}

export default App;

import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age':
      return {
        age: state.age + 1,
      };
      break;

    case 'decremented_age':
      return {
        age: state.age - 1,
      };
      break;
    default:
      break;
  }

  throw Error('Unknown action.');
}

export default function IncrementAge() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' });
        }}
      >
        Increment age
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'decremented_age' });
        }}
      >
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}


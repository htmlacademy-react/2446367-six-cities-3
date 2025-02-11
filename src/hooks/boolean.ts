import { useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  return {
    isOn,
    off: () => setIsOn(false),
    on: () => setIsOn(true),
    toggle: () => setIsOn((prev) => !prev),
  };
}

import { useEffect, useRef } from 'react';

export const useFocusElement = (isFocus?: boolean) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isFocus) return;

    ref.current?.focus();
  }, [isFocus]);

  return ref;
};

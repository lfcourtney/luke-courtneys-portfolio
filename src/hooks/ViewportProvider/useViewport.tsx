import { useContext } from 'react';
import globalContext from './globalContext';

export default function useViewport() {
  const { width } = useContext(globalContext);

  return { width };
}

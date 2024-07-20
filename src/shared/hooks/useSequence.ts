import { SequenceGenerator } from '@/shared/utils/sequence-generator';
import { useRef } from 'react';

export const useSequence = () => {
  const sequenceRef = useRef(SequenceGenerator.sequence.toString());

  return sequenceRef.current;
};

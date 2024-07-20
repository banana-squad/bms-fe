import type { NesFieldErrorTextStyle } from '@/shared/ui/text/nes-field-error-text/nes-field-error-text.css';
import { nesFieldErrorTextStyle } from '@/shared/ui/text/nes-field-error-text/nes-field-error-text.css';
import { NesText } from '@/shared/ui/text/nes-text';
import type { FieldApi } from '@tanstack/react-form';
import type { FunctionComponent } from 'react';

export type NesFieldErrorTextProps = NesFieldErrorTextStyle & {
  field: FieldApi<any, any, any, any>;
};

export const NesFieldErrorText: FunctionComponent<NesFieldErrorTextProps> = ({ field }) =>field.state.meta.isTouched && field.state.meta.errors.length ? (
  <NesText variant="error" className={nesFieldErrorTextStyle()}>{field.state.meta.errors[0]}</NesText>
) : null;

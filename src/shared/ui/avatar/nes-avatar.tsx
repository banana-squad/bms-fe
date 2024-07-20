import type { FunctionComponent, ImgHTMLAttributes } from 'react';
import type { NesAvatarVariants } from '@/shared/ui/avatar/nes-avatar.css';
import { nesAvatarVariants } from '@/shared/ui/avatar/nes-avatar.css';

type NesAvatarProps = ImgHTMLAttributes<HTMLImageElement> & NesAvatarVariants;

export const NesAvatar: FunctionComponent<NesAvatarProps> = ({ size, rounded, className, ...props }) => (
  <img {...props} className={nesAvatarVariants({ size, rounded, className })} alt={props.alt ?? ''} style={{ imageRendering: 'pixelated' }} />
);

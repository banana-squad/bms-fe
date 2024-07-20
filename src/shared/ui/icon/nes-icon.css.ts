import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesIconVariants = cva(['nes-icon'], {
  variants: {
    type: {
      nes: 'nes-logo',
      nesJp: 'nes-jp-logo',
      ['nes-jp']: 'nes-jp-logo',
      snes: 'snes-logo',
      snesJp: 'snes-jp-logo',
      ['snes-jp']: 'snes-jp-logo',
      octocat: 'octocat animate',
      smartphone: 'nes-smartphone',
      phone: 'nes-phone',
      mario: 'nes-mario',
      ash: 'nes-ash',
      pokeball: 'nes-pokeball',
      bulbasaur: 'nes-bulbasaur',
      charmander: 'nes-charmander',
      squirtle: 'nes-squirtle',
      kirby: 'nes-kirby',
    },
  },
});

export type NesIconVariants = VariantProps<typeof nesIconVariants>;

import { create } from '@storybook/theming/create';

const primary = '#209cee';
const secondary = '#d3d3d3';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"DungGeunMo", sans-serif',
  fontCode: 'monospace',

  brandTitle: '바나나 재고관리 시스템',
  brandUrl: '#',
  brandImage: '/banana.png',
  brandTarget: '_self',

  // Color
  colorPrimary: primary,
  colorSecondary: secondary,

  // UI
  // appBg: '#ffffff',
  // appContentBg: '#ffffff',
  // appPreviewBg: '#ffffff',
  // appBorderColor: secondary,
  // appBorderRadius: 4,

  // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#ffffff',

  // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: secondary,
  // barHoverColor: secondary,
  // barBg: '#ffffff',

  // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});
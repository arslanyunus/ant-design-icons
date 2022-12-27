// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorSwatchTwoToneSvg from '@ant-design/icons-svg/lib/asn/ColorSwatchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorSwatchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorSwatchTwoTone: ColorSwatchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorSwatchTwoToneSvg}></AntdIcon>;
};

ColorSwatchTwoTone.displayName = 'ColorSwatchTwoTone';
ColorSwatchTwoTone.inheritAttrs = false;
export default ColorSwatchTwoTone;
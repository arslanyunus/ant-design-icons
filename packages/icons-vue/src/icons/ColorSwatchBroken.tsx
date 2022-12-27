// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorSwatchBrokenSvg from '@ant-design/icons-svg/lib/asn/ColorSwatchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorSwatchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorSwatchBroken: ColorSwatchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorSwatchBrokenSvg}></AntdIcon>;
};

ColorSwatchBroken.displayName = 'ColorSwatchBroken';
ColorSwatchBroken.inheritAttrs = false;
export default ColorSwatchBroken;
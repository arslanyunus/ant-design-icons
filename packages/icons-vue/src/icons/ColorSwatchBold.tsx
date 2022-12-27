// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorSwatchBoldSvg from '@ant-design/icons-svg/lib/asn/ColorSwatchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorSwatchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorSwatchBold: ColorSwatchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorSwatchBoldSvg}></AntdIcon>;
};

ColorSwatchBold.displayName = 'ColorSwatchBold';
ColorSwatchBold.inheritAttrs = false;
export default ColorSwatchBold;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorSwatchOutlineSvg from '@ant-design/icons-svg/lib/asn/ColorSwatchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorSwatchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorSwatchOutline: ColorSwatchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorSwatchOutlineSvg}></AntdIcon>;
};

ColorSwatchOutline.displayName = 'ColorSwatchOutline';
ColorSwatchOutline.inheritAttrs = false;
export default ColorSwatchOutline;
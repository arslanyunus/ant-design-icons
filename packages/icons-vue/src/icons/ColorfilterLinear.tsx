// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterLinearSvg from '@ant-design/icons-svg/lib/asn/ColorfilterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterLinear: ColorfilterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterLinearSvg}></AntdIcon>;
};

ColorfilterLinear.displayName = 'ColorfilterLinear';
ColorfilterLinear.inheritAttrs = false;
export default ColorfilterLinear;
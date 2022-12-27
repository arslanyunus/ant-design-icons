// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterBrokenSvg from '@ant-design/icons-svg/lib/asn/ColorfilterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterBroken: ColorfilterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterBrokenSvg}></AntdIcon>;
};

ColorfilterBroken.displayName = 'ColorfilterBroken';
ColorfilterBroken.inheritAttrs = false;
export default ColorfilterBroken;
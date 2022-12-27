// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterBoldSvg from '@ant-design/icons-svg/lib/asn/ColorfilterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterBold: ColorfilterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterBoldSvg}></AntdIcon>;
};

ColorfilterBold.displayName = 'ColorfilterBold';
ColorfilterBold.inheritAttrs = false;
export default ColorfilterBold;
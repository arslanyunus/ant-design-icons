// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterOutlineSvg from '@ant-design/icons-svg/lib/asn/ColorfilterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterOutline: ColorfilterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterOutlineSvg}></AntdIcon>;
};

ColorfilterOutline.displayName = 'ColorfilterOutline';
ColorfilterOutline.inheritAttrs = false;
export default ColorfilterOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyOutlineSvg from '@ant-design/icons-svg/lib/asn/LovelyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyOutline: LovelyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyOutlineSvg}></AntdIcon>;
};

LovelyOutline.displayName = 'LovelyOutline';
LovelyOutline.inheritAttrs = false;
export default LovelyOutline;
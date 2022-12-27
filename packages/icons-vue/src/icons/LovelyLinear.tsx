// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyLinearSvg from '@ant-design/icons-svg/lib/asn/LovelyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyLinear: LovelyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyLinearSvg}></AntdIcon>;
};

LovelyLinear.displayName = 'LovelyLinear';
LovelyLinear.inheritAttrs = false;
export default LovelyLinear;
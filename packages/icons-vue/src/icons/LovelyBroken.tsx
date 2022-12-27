// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyBrokenSvg from '@ant-design/icons-svg/lib/asn/LovelyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyBroken: LovelyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyBrokenSvg}></AntdIcon>;
};

LovelyBroken.displayName = 'LovelyBroken';
LovelyBroken.inheritAttrs = false;
export default LovelyBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxBrokenSvg from '@ant-design/icons-svg/lib/asn/StrongboxBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxBroken: StrongboxBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxBrokenSvg}></AntdIcon>;
};

StrongboxBroken.displayName = 'StrongboxBroken';
StrongboxBroken.inheritAttrs = false;
export default StrongboxBroken;
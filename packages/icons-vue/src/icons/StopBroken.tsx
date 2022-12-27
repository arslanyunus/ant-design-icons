// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopBrokenSvg from '@ant-design/icons-svg/lib/asn/StopBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopBroken: StopBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopBrokenSvg}></AntdIcon>;
};

StopBroken.displayName = 'StopBroken';
StopBroken.inheritAttrs = false;
export default StopBroken;
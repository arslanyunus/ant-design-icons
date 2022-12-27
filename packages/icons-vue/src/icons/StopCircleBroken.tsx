// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/StopCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopCircleBroken: StopCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleBrokenSvg}></AntdIcon>;
};

StopCircleBroken.displayName = 'StopCircleBroken';
StopCircleBroken.inheritAttrs = false;
export default StopCircleBroken;
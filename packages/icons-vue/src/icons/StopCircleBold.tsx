// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopCircleBoldSvg from '@ant-design/icons-svg/lib/asn/StopCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopCircleBold: StopCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleBoldSvg}></AntdIcon>;
};

StopCircleBold.displayName = 'StopCircleBold';
StopCircleBold.inheritAttrs = false;
export default StopCircleBold;
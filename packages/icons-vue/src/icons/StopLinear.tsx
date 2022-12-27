// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopLinearSvg from '@ant-design/icons-svg/lib/asn/StopLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopLinear: StopLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopLinearSvg}></AntdIcon>;
};

StopLinear.displayName = 'StopLinear';
StopLinear.inheritAttrs = false;
export default StopLinear;
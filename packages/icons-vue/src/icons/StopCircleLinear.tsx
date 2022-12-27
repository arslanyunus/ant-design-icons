// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopCircleLinearSvg from '@ant-design/icons-svg/lib/asn/StopCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopCircleLinear: StopCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleLinearSvg}></AntdIcon>;
};

StopCircleLinear.displayName = 'StopCircleLinear';
StopCircleLinear.inheritAttrs = false;
export default StopCircleLinear;
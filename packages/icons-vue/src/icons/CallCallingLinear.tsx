// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingLinearSvg from '@ant-design/icons-svg/lib/asn/CallCallingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingLinear: CallCallingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingLinearSvg}></AntdIcon>;
};

CallCallingLinear.displayName = 'CallCallingLinear';
CallCallingLinear.inheritAttrs = false;
export default CallCallingLinear;
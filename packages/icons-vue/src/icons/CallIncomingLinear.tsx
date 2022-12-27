// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingLinearSvg from '@ant-design/icons-svg/lib/asn/CallIncomingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingLinear: CallIncomingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingLinearSvg}></AntdIcon>;
};

CallIncomingLinear.displayName = 'CallIncomingLinear';
CallIncomingLinear.inheritAttrs = false;
export default CallIncomingLinear;
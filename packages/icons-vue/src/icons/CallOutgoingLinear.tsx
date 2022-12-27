// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingLinearSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingLinear: CallOutgoingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingLinearSvg}></AntdIcon>;
};

CallOutgoingLinear.displayName = 'CallOutgoingLinear';
CallOutgoingLinear.inheritAttrs = false;
export default CallOutgoingLinear;
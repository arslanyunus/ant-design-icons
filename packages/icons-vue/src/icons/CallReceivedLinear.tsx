// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedLinearSvg from '@ant-design/icons-svg/lib/asn/CallReceivedLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedLinear: CallReceivedLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedLinearSvg}></AntdIcon>;
};

CallReceivedLinear.displayName = 'CallReceivedLinear';
CallReceivedLinear.inheritAttrs = false;
export default CallReceivedLinear;
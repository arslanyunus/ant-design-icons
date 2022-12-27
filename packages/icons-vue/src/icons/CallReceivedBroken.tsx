// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedBrokenSvg from '@ant-design/icons-svg/lib/asn/CallReceivedBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedBroken: CallReceivedBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedBrokenSvg}></AntdIcon>;
};

CallReceivedBroken.displayName = 'CallReceivedBroken';
CallReceivedBroken.inheritAttrs = false;
export default CallReceivedBroken;
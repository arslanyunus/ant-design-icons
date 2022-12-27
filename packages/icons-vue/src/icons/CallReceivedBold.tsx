// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedBoldSvg from '@ant-design/icons-svg/lib/asn/CallReceivedBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedBold: CallReceivedBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedBoldSvg}></AntdIcon>;
};

CallReceivedBold.displayName = 'CallReceivedBold';
CallReceivedBold.inheritAttrs = false;
export default CallReceivedBold;
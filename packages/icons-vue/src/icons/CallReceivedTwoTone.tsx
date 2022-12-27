// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallReceivedTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedTwoTone: CallReceivedTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedTwoToneSvg}></AntdIcon>;
};

CallReceivedTwoTone.displayName = 'CallReceivedTwoTone';
CallReceivedTwoTone.inheritAttrs = false;
export default CallReceivedTwoTone;
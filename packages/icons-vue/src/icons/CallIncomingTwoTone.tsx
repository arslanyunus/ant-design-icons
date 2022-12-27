// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallIncomingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingTwoTone: CallIncomingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingTwoToneSvg}></AntdIcon>;
};

CallIncomingTwoTone.displayName = 'CallIncomingTwoTone';
CallIncomingTwoTone.inheritAttrs = false;
export default CallIncomingTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingTwoTone: CallOutgoingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingTwoToneSvg}></AntdIcon>;
};

CallOutgoingTwoTone.displayName = 'CallOutgoingTwoTone';
CallOutgoingTwoTone.inheritAttrs = false;
export default CallOutgoingTwoTone;
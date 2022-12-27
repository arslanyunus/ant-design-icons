// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallCallingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingTwoTone: CallCallingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingTwoToneSvg}></AntdIcon>;
};

CallCallingTwoTone.displayName = 'CallCallingTwoTone';
CallCallingTwoTone.inheritAttrs = false;
export default CallCallingTwoTone;
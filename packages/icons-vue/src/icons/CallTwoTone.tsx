// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallTwoToneSvg from '@ant-design/icons-svg/lib/asn/CallTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallTwoTone: CallTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallTwoToneSvg}></AntdIcon>;
};

CallTwoTone.displayName = 'CallTwoTone';
CallTwoTone.inheritAttrs = false;
export default CallTwoTone;
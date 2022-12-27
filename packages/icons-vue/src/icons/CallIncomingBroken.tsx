// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingBrokenSvg from '@ant-design/icons-svg/lib/asn/CallIncomingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingBroken: CallIncomingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingBrokenSvg}></AntdIcon>;
};

CallIncomingBroken.displayName = 'CallIncomingBroken';
CallIncomingBroken.inheritAttrs = false;
export default CallIncomingBroken;
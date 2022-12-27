// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingBrokenSvg from '@ant-design/icons-svg/lib/asn/CallCallingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingBroken: CallCallingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingBrokenSvg}></AntdIcon>;
};

CallCallingBroken.displayName = 'CallCallingBroken';
CallCallingBroken.inheritAttrs = false;
export default CallCallingBroken;
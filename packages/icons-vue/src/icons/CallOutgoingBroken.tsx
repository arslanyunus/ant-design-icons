// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingBrokenSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingBroken: CallOutgoingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingBrokenSvg}></AntdIcon>;
};

CallOutgoingBroken.displayName = 'CallOutgoingBroken';
CallOutgoingBroken.inheritAttrs = false;
export default CallOutgoingBroken;
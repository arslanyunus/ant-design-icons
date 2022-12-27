// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallBrokenSvg from '@ant-design/icons-svg/lib/asn/CallBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallBroken: CallBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallBrokenSvg}></AntdIcon>;
};

CallBroken.displayName = 'CallBroken';
CallBroken.inheritAttrs = false;
export default CallBroken;
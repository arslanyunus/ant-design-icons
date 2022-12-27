// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddBrokenSvg from '@ant-design/icons-svg/lib/asn/CallAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddBroken: CallAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddBrokenSvg}></AntdIcon>;
};

CallAddBroken.displayName = 'CallAddBroken';
CallAddBroken.inheritAttrs = false;
export default CallAddBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddLinearSvg from '@ant-design/icons-svg/lib/asn/CallAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddLinear: CallAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddLinearSvg}></AntdIcon>;
};

CallAddLinear.displayName = 'CallAddLinear';
CallAddLinear.inheritAttrs = false;
export default CallAddLinear;
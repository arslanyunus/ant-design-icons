// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallLinearSvg from '@ant-design/icons-svg/lib/asn/CallLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallLinear: CallLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallLinearSvg}></AntdIcon>;
};

CallLinear.displayName = 'CallLinear';
CallLinear.inheritAttrs = false;
export default CallLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/CallRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallRemoveLinear: CallRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallRemoveLinearSvg}></AntdIcon>;
};

CallRemoveLinear.displayName = 'CallRemoveLinear';
CallRemoveLinear.inheritAttrs = false;
export default CallRemoveLinear;
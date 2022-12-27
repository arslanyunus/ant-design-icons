// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusLinearSvg from '@ant-design/icons-svg/lib/asn/CallMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusLinear: CallMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusLinearSvg}></AntdIcon>;
};

CallMinusLinear.displayName = 'CallMinusLinear';
CallMinusLinear.inheritAttrs = false;
export default CallMinusLinear;
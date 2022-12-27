// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostLinearSvg from '@ant-design/icons-svg/lib/asn/SignpostLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostLinear: SignpostLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostLinearSvg}></AntdIcon>;
};

SignpostLinear.displayName = 'SignpostLinear';
SignpostLinear.inheritAttrs = false;
export default SignpostLinear;
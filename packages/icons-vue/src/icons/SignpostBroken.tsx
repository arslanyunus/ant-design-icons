// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostBrokenSvg from '@ant-design/icons-svg/lib/asn/SignpostBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostBroken: SignpostBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostBrokenSvg}></AntdIcon>;
};

SignpostBroken.displayName = 'SignpostBroken';
SignpostBroken.inheritAttrs = false;
export default SignpostBroken;
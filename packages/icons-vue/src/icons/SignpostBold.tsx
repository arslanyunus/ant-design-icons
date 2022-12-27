// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostBoldSvg from '@ant-design/icons-svg/lib/asn/SignpostBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostBold: SignpostBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostBoldSvg}></AntdIcon>;
};

SignpostBold.displayName = 'SignpostBold';
SignpostBold.inheritAttrs = false;
export default SignpostBold;
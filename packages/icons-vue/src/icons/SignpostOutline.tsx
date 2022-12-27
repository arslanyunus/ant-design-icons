// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostOutlineSvg from '@ant-design/icons-svg/lib/asn/SignpostOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostOutline: SignpostOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostOutlineSvg}></AntdIcon>;
};

SignpostOutline.displayName = 'SignpostOutline';
SignpostOutline.inheritAttrs = false;
export default SignpostOutline;
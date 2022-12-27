// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostTwoToneSvg from '@ant-design/icons-svg/lib/asn/SignpostTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostTwoTone: SignpostTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostTwoToneSvg}></AntdIcon>;
};

SignpostTwoTone.displayName = 'SignpostTwoTone';
SignpostTwoTone.inheritAttrs = false;
export default SignpostTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignpostBulkSvg from '@ant-design/icons-svg/lib/asn/SignpostBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignpostBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignpostBulk: SignpostBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignpostBulkSvg}></AntdIcon>;
};

SignpostBulk.displayName = 'SignpostBulk';
SignpostBulk.inheritAttrs = false;
export default SignpostBulk;
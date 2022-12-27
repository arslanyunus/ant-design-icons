// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramLinearSvg from '@ant-design/icons-svg/lib/asn/InstagramLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramLinear: InstagramLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramLinearSvg}></AntdIcon>;
};

InstagramLinear.displayName = 'InstagramLinear';
InstagramLinear.inheritAttrs = false;
export default InstagramLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickLinearSvg from '@ant-design/icons-svg/lib/asn/BoxTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickLinear: BoxTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickLinearSvg}></AntdIcon>;
};

BoxTickLinear.displayName = 'BoxTickLinear';
BoxTickLinear.inheritAttrs = false;
export default BoxTickLinear;
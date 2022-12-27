// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeLinearSvg from '@ant-design/icons-svg/lib/asn/BoxTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeLinear: BoxTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeLinearSvg}></AntdIcon>;
};

BoxTimeLinear.displayName = 'BoxTimeLinear';
BoxTimeLinear.inheritAttrs = false;
export default BoxTimeLinear;
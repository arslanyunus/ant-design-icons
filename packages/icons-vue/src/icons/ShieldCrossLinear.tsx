// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossLinear: ShieldCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossLinearSvg}></AntdIcon>;
};

ShieldCrossLinear.displayName = 'ShieldCrossLinear';
ShieldCrossLinear.inheritAttrs = false;
export default ShieldCrossLinear;
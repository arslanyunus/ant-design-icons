// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldLinear: ShieldLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldLinearSvg}></AntdIcon>;
};

ShieldLinear.displayName = 'ShieldLinear';
ShieldLinear.inheritAttrs = false;
export default ShieldLinear;
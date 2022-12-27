// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchLinear: ShieldSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchLinearSvg}></AntdIcon>;
};

ShieldSearchLinear.displayName = 'ShieldSearchLinear';
ShieldSearchLinear.inheritAttrs = false;
export default ShieldSearchLinear;
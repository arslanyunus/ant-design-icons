// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashLinearSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashLinear: ShieldSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashLinearSvg}></AntdIcon>;
};

ShieldSlashLinear.displayName = 'ShieldSlashLinear';
ShieldSlashLinear.inheritAttrs = false;
export default ShieldSlashLinear;
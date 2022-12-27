// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashBroken: ShieldSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashBrokenSvg}></AntdIcon>;
};

ShieldSlashBroken.displayName = 'ShieldSlashBroken';
ShieldSlashBroken.inheritAttrs = false;
export default ShieldSlashBroken;
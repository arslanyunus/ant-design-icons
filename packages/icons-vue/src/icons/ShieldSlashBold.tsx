// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashBoldSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashBold: ShieldSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashBoldSvg}></AntdIcon>;
};

ShieldSlashBold.displayName = 'ShieldSlashBold';
ShieldSlashBold.inheritAttrs = false;
export default ShieldSlashBold;
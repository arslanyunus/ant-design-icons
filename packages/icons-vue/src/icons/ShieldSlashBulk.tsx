// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashBulk: ShieldSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashBulkSvg}></AntdIcon>;
};

ShieldSlashBulk.displayName = 'ShieldSlashBulk';
ShieldSlashBulk.inheritAttrs = false;
export default ShieldSlashBulk;
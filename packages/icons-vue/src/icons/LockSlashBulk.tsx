// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashBulkSvg from '@ant-design/icons-svg/lib/asn/LockSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashBulk: LockSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashBulkSvg}></AntdIcon>;
};

LockSlashBulk.displayName = 'LockSlashBulk';
LockSlashBulk.inheritAttrs = false;
export default LockSlashBulk;
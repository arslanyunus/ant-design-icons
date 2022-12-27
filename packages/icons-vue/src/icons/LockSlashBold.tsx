// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashBoldSvg from '@ant-design/icons-svg/lib/asn/LockSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashBold: LockSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashBoldSvg}></AntdIcon>;
};

LockSlashBold.displayName = 'LockSlashBold';
LockSlashBold.inheritAttrs = false;
export default LockSlashBold;
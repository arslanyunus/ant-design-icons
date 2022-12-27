// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/LockSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashBroken: LockSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashBrokenSvg}></AntdIcon>;
};

LockSlashBroken.displayName = 'LockSlashBroken';
LockSlashBroken.inheritAttrs = false;
export default LockSlashBroken;
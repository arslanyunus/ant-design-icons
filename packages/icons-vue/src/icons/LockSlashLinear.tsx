// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashLinearSvg from '@ant-design/icons-svg/lib/asn/LockSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashLinear: LockSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashLinearSvg}></AntdIcon>;
};

LockSlashLinear.displayName = 'LockSlashLinear';
LockSlashLinear.inheritAttrs = false;
export default LockSlashLinear;
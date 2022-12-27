// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/LockSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashOutline: LockSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashOutlineSvg}></AntdIcon>;
};

LockSlashOutline.displayName = 'LockSlashOutline';
LockSlashOutline.inheritAttrs = false;
export default LockSlashOutline;
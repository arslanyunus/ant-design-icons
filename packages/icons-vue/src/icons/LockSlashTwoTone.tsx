// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockSlashTwoTone: LockSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockSlashTwoToneSvg}></AntdIcon>;
};

LockSlashTwoTone.displayName = 'LockSlashTwoTone';
LockSlashTwoTone.inheritAttrs = false;
export default LockSlashTwoTone;
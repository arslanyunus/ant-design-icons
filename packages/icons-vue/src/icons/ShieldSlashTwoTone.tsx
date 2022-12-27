// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashTwoTone: ShieldSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashTwoToneSvg}></AntdIcon>;
};

ShieldSlashTwoTone.displayName = 'ShieldSlashTwoTone';
ShieldSlashTwoTone.inheritAttrs = false;
export default ShieldSlashTwoTone;
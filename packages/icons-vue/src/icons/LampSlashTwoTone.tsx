// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/LampSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashTwoTone: LampSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashTwoToneSvg}></AntdIcon>;
};

LampSlashTwoTone.displayName = 'LampSlashTwoTone';
LampSlashTwoTone.inheritAttrs = false;
export default LampSlashTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashTwoTone: EyeSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashTwoToneSvg}></AntdIcon>;
};

EyeSlashTwoTone.displayName = 'EyeSlashTwoTone';
EyeSlashTwoTone.inheritAttrs = false;
export default EyeSlashTwoTone;
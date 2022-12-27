// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/EyeSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashBroken: EyeSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashBrokenSvg}></AntdIcon>;
};

EyeSlashBroken.displayName = 'EyeSlashBroken';
EyeSlashBroken.inheritAttrs = false;
export default EyeSlashBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashBoldSvg from '@ant-design/icons-svg/lib/asn/EyeSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashBold: EyeSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashBoldSvg}></AntdIcon>;
};

EyeSlashBold.displayName = 'EyeSlashBold';
EyeSlashBold.inheritAttrs = false;
export default EyeSlashBold;
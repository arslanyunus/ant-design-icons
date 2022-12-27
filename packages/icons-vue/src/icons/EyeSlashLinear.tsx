// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashLinearSvg from '@ant-design/icons-svg/lib/asn/EyeSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashLinear: EyeSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashLinearSvg}></AntdIcon>;
};

EyeSlashLinear.displayName = 'EyeSlashLinear';
EyeSlashLinear.inheritAttrs = false;
export default EyeSlashLinear;
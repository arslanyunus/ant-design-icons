// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/EyeSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashOutline: EyeSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashOutlineSvg}></AntdIcon>;
};

EyeSlashOutline.displayName = 'EyeSlashOutline';
EyeSlashOutline.inheritAttrs = false;
export default EyeSlashOutline;
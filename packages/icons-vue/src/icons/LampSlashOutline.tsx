// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/LampSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashOutline: LampSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashOutlineSvg}></AntdIcon>;
};

LampSlashOutline.displayName = 'LampSlashOutline';
LampSlashOutline.inheritAttrs = false;
export default LampSlashOutline;
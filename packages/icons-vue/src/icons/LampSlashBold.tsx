// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashBoldSvg from '@ant-design/icons-svg/lib/asn/LampSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashBold: LampSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashBoldSvg}></AntdIcon>;
};

LampSlashBold.displayName = 'LampSlashBold';
LampSlashBold.inheritAttrs = false;
export default LampSlashBold;
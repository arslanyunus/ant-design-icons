// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/LampSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashBroken: LampSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashBrokenSvg}></AntdIcon>;
};

LampSlashBroken.displayName = 'LampSlashBroken';
LampSlashBroken.inheritAttrs = false;
export default LampSlashBroken;
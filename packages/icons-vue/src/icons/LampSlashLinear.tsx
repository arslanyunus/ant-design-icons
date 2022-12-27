// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampSlashLinearSvg from '@ant-design/icons-svg/lib/asn/LampSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampSlashLinear: LampSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampSlashLinearSvg}></AntdIcon>;
};

LampSlashLinear.displayName = 'LampSlashLinear';
LampSlashLinear.inheritAttrs = false;
export default LampSlashLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashLinearSvg from '@ant-design/icons-svg/lib/asn/HeartSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashLinear: HeartSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashLinearSvg}></AntdIcon>;
};

HeartSlashLinear.displayName = 'HeartSlashLinear';
HeartSlashLinear.inheritAttrs = false;
export default HeartSlashLinear;
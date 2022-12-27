// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashBroken: HeartSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashBrokenSvg}></AntdIcon>;
};

HeartSlashBroken.displayName = 'HeartSlashBroken';
HeartSlashBroken.inheritAttrs = false;
export default HeartSlashBroken;
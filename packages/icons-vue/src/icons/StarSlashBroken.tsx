// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/StarSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashBroken: StarSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashBrokenSvg}></AntdIcon>;
};

StarSlashBroken.displayName = 'StarSlashBroken';
StarSlashBroken.inheritAttrs = false;
export default StarSlashBroken;
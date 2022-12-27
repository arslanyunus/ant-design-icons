// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashBoldSvg from '@ant-design/icons-svg/lib/asn/StarSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashBold: StarSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashBoldSvg}></AntdIcon>;
};

StarSlashBold.displayName = 'StarSlashBold';
StarSlashBold.inheritAttrs = false;
export default StarSlashBold;
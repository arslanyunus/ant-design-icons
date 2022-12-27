// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashBoldSvg from '@ant-design/icons-svg/lib/asn/HeartSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashBold: HeartSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashBoldSvg}></AntdIcon>;
};

HeartSlashBold.displayName = 'HeartSlashBold';
HeartSlashBold.inheritAttrs = false;
export default HeartSlashBold;
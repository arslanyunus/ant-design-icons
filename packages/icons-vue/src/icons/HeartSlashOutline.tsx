// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashOutline: HeartSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashOutlineSvg}></AntdIcon>;
};

HeartSlashOutline.displayName = 'HeartSlashOutline';
HeartSlashOutline.inheritAttrs = false;
export default HeartSlashOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/StarSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashOutline: StarSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashOutlineSvg}></AntdIcon>;
};

StarSlashOutline.displayName = 'StarSlashOutline';
StarSlashOutline.inheritAttrs = false;
export default StarSlashOutline;
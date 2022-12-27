// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashBulkSvg from '@ant-design/icons-svg/lib/asn/StarSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashBulk: StarSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashBulkSvg}></AntdIcon>;
};

StarSlashBulk.displayName = 'StarSlashBulk';
StarSlashBulk.inheritAttrs = false;
export default StarSlashBulk;
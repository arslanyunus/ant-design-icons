// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeSlashBulkSvg from '@ant-design/icons-svg/lib/asn/EyeSlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeSlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeSlashBulk: EyeSlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeSlashBulkSvg}></AntdIcon>;
};

EyeSlashBulk.displayName = 'EyeSlashBulk';
EyeSlashBulk.inheritAttrs = false;
export default EyeSlashBulk;
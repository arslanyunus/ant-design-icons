// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashBoldSvg from '@ant-design/icons-svg/lib/asn/FlashSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashBold: FlashSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashBoldSvg}></AntdIcon>;
};

FlashSlashBold.displayName = 'FlashSlashBold';
FlashSlashBold.inheritAttrs = false;
export default FlashSlashBold;
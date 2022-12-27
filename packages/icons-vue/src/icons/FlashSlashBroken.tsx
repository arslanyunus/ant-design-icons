// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/FlashSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashBroken: FlashSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashBrokenSvg}></AntdIcon>;
};

FlashSlashBroken.displayName = 'FlashSlashBroken';
FlashSlashBroken.inheritAttrs = false;
export default FlashSlashBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/FlashSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashOutline: FlashSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashOutlineSvg}></AntdIcon>;
};

FlashSlashOutline.displayName = 'FlashSlashOutline';
FlashSlashOutline.inheritAttrs = false;
export default FlashSlashOutline;
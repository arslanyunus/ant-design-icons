// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashBulkSvg from '@ant-design/icons-svg/lib/asn/FlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashBulk: FlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashBulkSvg}></AntdIcon>;
};

FlashBulk.displayName = 'FlashBulk';
FlashBulk.inheritAttrs = false;
export default FlashBulk;
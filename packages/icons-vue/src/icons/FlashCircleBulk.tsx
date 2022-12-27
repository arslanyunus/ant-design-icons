// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleBulkSvg from '@ant-design/icons-svg/lib/asn/FlashCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleBulk: FlashCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleBulkSvg}></AntdIcon>;
};

FlashCircleBulk.displayName = 'FlashCircleBulk';
FlashCircleBulk.inheritAttrs = false;
export default FlashCircleBulk;
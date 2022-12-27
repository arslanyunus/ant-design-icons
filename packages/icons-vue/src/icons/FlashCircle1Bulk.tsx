// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircle1BulkSvg from '@ant-design/icons-svg/lib/asn/FlashCircle1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircle1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircle1Bulk: FlashCircle1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircle1BulkSvg}></AntdIcon>;
};

FlashCircle1Bulk.displayName = 'FlashCircle1Bulk';
FlashCircle1Bulk.inheritAttrs = false;
export default FlashCircle1Bulk;
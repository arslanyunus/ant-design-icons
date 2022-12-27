// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftBulkSvg from '@ant-design/icons-svg/lib/asn/GiftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftBulk: GiftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftBulkSvg}></AntdIcon>;
};

GiftBulk.displayName = 'GiftBulk';
GiftBulk.inheritAttrs = false;
export default GiftBulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTick2BulkSvg from '@ant-design/icons-svg/lib/asn/BagTick2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTick2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTick2Bulk: BagTick2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTick2BulkSvg}></AntdIcon>;
};

BagTick2Bulk.displayName = 'BagTick2Bulk';
BagTick2Bulk.inheritAttrs = false;
export default BagTick2Bulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1BulkSvg from '@ant-design/icons-svg/lib/asn/BagCross1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1Bulk: BagCross1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1BulkSvg}></AntdIcon>;
};

BagCross1Bulk.displayName = 'BagCross1Bulk';
BagCross1Bulk.inheritAttrs = false;
export default BagCross1Bulk;
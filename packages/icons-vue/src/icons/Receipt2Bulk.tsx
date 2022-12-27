// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2BulkSvg from '@ant-design/icons-svg/lib/asn/Receipt2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2Bulk: Receipt2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2BulkSvg}></AntdIcon>;
};

Receipt2Bulk.displayName = 'Receipt2Bulk';
Receipt2Bulk.inheritAttrs = false;
export default Receipt2Bulk;
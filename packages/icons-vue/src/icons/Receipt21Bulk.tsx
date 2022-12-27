// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21BulkSvg from '@ant-design/icons-svg/lib/asn/Receipt21Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21Bulk: Receipt21BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21BulkSvg}></AntdIcon>;
};

Receipt21Bulk.displayName = 'Receipt21Bulk';
Receipt21Bulk.inheritAttrs = false;
export default Receipt21Bulk;
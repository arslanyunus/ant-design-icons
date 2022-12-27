// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flag2BulkSvg from '@ant-design/icons-svg/lib/asn/Flag2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flag2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flag2Bulk: Flag2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flag2BulkSvg}></AntdIcon>;
};

Flag2Bulk.displayName = 'Flag2Bulk';
Flag2Bulk.inheritAttrs = false;
export default Flag2Bulk;
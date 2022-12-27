// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2BulkSvg from '@ant-design/icons-svg/lib/asn/Wind2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2Bulk: Wind2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2BulkSvg}></AntdIcon>;
};

Wind2Bulk.displayName = 'Wind2Bulk';
Wind2Bulk.inheritAttrs = false;
export default Wind2Bulk;
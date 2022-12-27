// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5BulkSvg from '@ant-design/icons-svg/lib/asn/Setting5Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5Bulk: Setting5BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5BulkSvg}></AntdIcon>;
};

Setting5Bulk.displayName = 'Setting5Bulk';
Setting5Bulk.inheritAttrs = false;
export default Setting5Bulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2BulkSvg from '@ant-design/icons-svg/lib/asn/Setting2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting2Bulk: Setting2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting2BulkSvg}></AntdIcon>;
};

Setting2Bulk.displayName = 'Setting2Bulk';
Setting2Bulk.inheritAttrs = false;
export default Setting2Bulk;
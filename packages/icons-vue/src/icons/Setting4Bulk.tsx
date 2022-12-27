// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4BulkSvg from '@ant-design/icons-svg/lib/asn/Setting4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4Bulk: Setting4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4BulkSvg}></AntdIcon>;
};

Setting4Bulk.displayName = 'Setting4Bulk';
Setting4Bulk.inheritAttrs = false;
export default Setting4Bulk;
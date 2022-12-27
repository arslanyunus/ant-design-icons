// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3BulkSvg from '@ant-design/icons-svg/lib/asn/Setting3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3Bulk: Setting3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3BulkSvg}></AntdIcon>;
};

Setting3Bulk.displayName = 'Setting3Bulk';
Setting3Bulk.inheritAttrs = false;
export default Setting3Bulk;
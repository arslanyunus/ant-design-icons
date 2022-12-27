// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2BulkSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2Bulk: RefreshSquare2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2BulkSvg}></AntdIcon>;
};

RefreshSquare2Bulk.displayName = 'RefreshSquare2Bulk';
RefreshSquare2Bulk.inheritAttrs = false;
export default RefreshSquare2Bulk;
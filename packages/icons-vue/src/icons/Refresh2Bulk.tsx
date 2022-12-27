// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Refresh2BulkSvg from '@ant-design/icons-svg/lib/asn/Refresh2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Refresh2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Refresh2Bulk: Refresh2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Refresh2BulkSvg}></AntdIcon>;
};

Refresh2Bulk.displayName = 'Refresh2Bulk';
Refresh2Bulk.inheritAttrs = false;
export default Refresh2Bulk;
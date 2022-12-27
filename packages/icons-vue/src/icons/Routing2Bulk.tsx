// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Routing2BulkSvg from '@ant-design/icons-svg/lib/asn/Routing2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Routing2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Routing2Bulk: Routing2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Routing2BulkSvg}></AntdIcon>;
};

Routing2Bulk.displayName = 'Routing2Bulk';
Routing2Bulk.inheritAttrs = false;
export default Routing2Bulk;
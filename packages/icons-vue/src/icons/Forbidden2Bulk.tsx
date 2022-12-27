// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forbidden2BulkSvg from '@ant-design/icons-svg/lib/asn/Forbidden2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forbidden2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forbidden2Bulk: Forbidden2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forbidden2BulkSvg}></AntdIcon>;
};

Forbidden2Bulk.displayName = 'Forbidden2Bulk';
Forbidden2Bulk.inheritAttrs = false;
export default Forbidden2Bulk;
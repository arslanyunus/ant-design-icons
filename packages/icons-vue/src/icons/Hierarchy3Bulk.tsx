// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3BulkSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3Bulk: Hierarchy3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3BulkSvg}></AntdIcon>;
};

Hierarchy3Bulk.displayName = 'Hierarchy3Bulk';
Hierarchy3Bulk.inheritAttrs = false;
export default Hierarchy3Bulk;
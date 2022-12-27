// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2BulkSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2Bulk: Hierarchy2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2BulkSvg}></AntdIcon>;
};

Hierarchy2Bulk.displayName = 'Hierarchy2Bulk';
Hierarchy2Bulk.inheritAttrs = false;
export default Hierarchy2Bulk;
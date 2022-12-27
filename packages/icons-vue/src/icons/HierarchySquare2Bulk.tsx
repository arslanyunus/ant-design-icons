// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2BulkSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2Bulk: HierarchySquare2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2BulkSvg}></AntdIcon>;
};

HierarchySquare2Bulk.displayName = 'HierarchySquare2Bulk';
HierarchySquare2Bulk.inheritAttrs = false;
export default HierarchySquare2Bulk;
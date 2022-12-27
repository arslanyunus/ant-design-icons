// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3BulkSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3Bulk: HierarchySquare3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3BulkSvg}></AntdIcon>;
};

HierarchySquare3Bulk.displayName = 'HierarchySquare3Bulk';
HierarchySquare3Bulk.inheritAttrs = false;
export default HierarchySquare3Bulk;
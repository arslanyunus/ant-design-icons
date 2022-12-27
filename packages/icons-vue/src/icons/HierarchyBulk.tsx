// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyBulkSvg from '@ant-design/icons-svg/lib/asn/HierarchyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyBulk: HierarchyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyBulkSvg}></AntdIcon>;
};

HierarchyBulk.displayName = 'HierarchyBulk';
HierarchyBulk.inheritAttrs = false;
export default HierarchyBulk;
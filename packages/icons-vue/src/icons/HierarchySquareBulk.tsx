// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareBulkSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareBulk: HierarchySquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareBulkSvg}></AntdIcon>;
};

HierarchySquareBulk.displayName = 'HierarchySquareBulk';
HierarchySquareBulk.inheritAttrs = false;
export default HierarchySquareBulk;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyOutlineSvg from '@ant-design/icons-svg/lib/asn/HierarchyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyOutline: HierarchyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyOutlineSvg}></AntdIcon>;
};

HierarchyOutline.displayName = 'HierarchyOutline';
HierarchyOutline.inheritAttrs = false;
export default HierarchyOutline;
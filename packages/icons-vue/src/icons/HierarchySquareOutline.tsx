// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareOutlineSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareOutline: HierarchySquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareOutlineSvg}></AntdIcon>;
};

HierarchySquareOutline.displayName = 'HierarchySquareOutline';
HierarchySquareOutline.inheritAttrs = false;
export default HierarchySquareOutline;
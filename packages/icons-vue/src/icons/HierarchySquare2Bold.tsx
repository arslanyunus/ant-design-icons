// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2BoldSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2Bold: HierarchySquare2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2BoldSvg}></AntdIcon>;
};

HierarchySquare2Bold.displayName = 'HierarchySquare2Bold';
HierarchySquare2Bold.inheritAttrs = false;
export default HierarchySquare2Bold;
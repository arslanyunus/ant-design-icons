// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2LinearSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2Linear: HierarchySquare2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2LinearSvg}></AntdIcon>;
};

HierarchySquare2Linear.displayName = 'HierarchySquare2Linear';
HierarchySquare2Linear.inheritAttrs = false;
export default HierarchySquare2Linear;
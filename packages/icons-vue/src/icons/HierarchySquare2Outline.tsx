// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2OutlineSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2Outline: HierarchySquare2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2OutlineSvg}></AntdIcon>;
};

HierarchySquare2Outline.displayName = 'HierarchySquare2Outline';
HierarchySquare2Outline.inheritAttrs = false;
export default HierarchySquare2Outline;
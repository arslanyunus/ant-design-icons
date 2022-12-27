// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2BrokenSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2Broken: HierarchySquare2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2BrokenSvg}></AntdIcon>;
};

HierarchySquare2Broken.displayName = 'HierarchySquare2Broken';
HierarchySquare2Broken.inheritAttrs = false;
export default HierarchySquare2Broken;
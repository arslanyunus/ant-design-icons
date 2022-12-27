// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3BrokenSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3Broken: HierarchySquare3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3BrokenSvg}></AntdIcon>;
};

HierarchySquare3Broken.displayName = 'HierarchySquare3Broken';
HierarchySquare3Broken.inheritAttrs = false;
export default HierarchySquare3Broken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3OutlineSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3Outline: HierarchySquare3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3OutlineSvg}></AntdIcon>;
};

HierarchySquare3Outline.displayName = 'HierarchySquare3Outline';
HierarchySquare3Outline.inheritAttrs = false;
export default HierarchySquare3Outline;
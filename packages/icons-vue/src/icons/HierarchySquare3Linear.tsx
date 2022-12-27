// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3LinearSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3Linear: HierarchySquare3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3LinearSvg}></AntdIcon>;
};

HierarchySquare3Linear.displayName = 'HierarchySquare3Linear';
HierarchySquare3Linear.inheritAttrs = false;
export default HierarchySquare3Linear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyLinearSvg from '@ant-design/icons-svg/lib/asn/HierarchyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyLinear: HierarchyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyLinearSvg}></AntdIcon>;
};

HierarchyLinear.displayName = 'HierarchyLinear';
HierarchyLinear.inheritAttrs = false;
export default HierarchyLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareLinearSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareLinear: HierarchySquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareLinearSvg}></AntdIcon>;
};

HierarchySquareLinear.displayName = 'HierarchySquareLinear';
HierarchySquareLinear.inheritAttrs = false;
export default HierarchySquareLinear;
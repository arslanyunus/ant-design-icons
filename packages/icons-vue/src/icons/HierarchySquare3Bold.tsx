// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3BoldSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3Bold: HierarchySquare3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3BoldSvg}></AntdIcon>;
};

HierarchySquare3Bold.displayName = 'HierarchySquare3Bold';
HierarchySquare3Bold.inheritAttrs = false;
export default HierarchySquare3Bold;
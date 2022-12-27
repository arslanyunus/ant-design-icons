// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyBoldSvg from '@ant-design/icons-svg/lib/asn/HierarchyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyBold: HierarchyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyBoldSvg}></AntdIcon>;
};

HierarchyBold.displayName = 'HierarchyBold';
HierarchyBold.inheritAttrs = false;
export default HierarchyBold;
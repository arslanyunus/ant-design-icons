// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyBrokenSvg from '@ant-design/icons-svg/lib/asn/HierarchyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyBroken: HierarchyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyBrokenSvg}></AntdIcon>;
};

HierarchyBroken.displayName = 'HierarchyBroken';
HierarchyBroken.inheritAttrs = false;
export default HierarchyBroken;
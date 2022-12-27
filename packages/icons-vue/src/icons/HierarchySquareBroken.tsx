// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareBrokenSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareBroken: HierarchySquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareBrokenSvg}></AntdIcon>;
};

HierarchySquareBroken.displayName = 'HierarchySquareBroken';
HierarchySquareBroken.inheritAttrs = false;
export default HierarchySquareBroken;
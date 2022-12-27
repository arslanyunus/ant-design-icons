// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareBoldSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareBold: HierarchySquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareBoldSvg}></AntdIcon>;
};

HierarchySquareBold.displayName = 'HierarchySquareBold';
HierarchySquareBold.inheritAttrs = false;
export default HierarchySquareBold;
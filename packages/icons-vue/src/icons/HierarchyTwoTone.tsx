// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchyTwoToneSvg from '@ant-design/icons-svg/lib/asn/HierarchyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchyTwoTone: HierarchyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchyTwoToneSvg}></AntdIcon>;
};

HierarchyTwoTone.displayName = 'HierarchyTwoTone';
HierarchyTwoTone.inheritAttrs = false;
export default HierarchyTwoTone;
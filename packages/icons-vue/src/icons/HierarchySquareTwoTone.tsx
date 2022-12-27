// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/HierarchySquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquareTwoTone: HierarchySquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquareTwoToneSvg}></AntdIcon>;
};

HierarchySquareTwoTone.displayName = 'HierarchySquareTwoTone';
HierarchySquareTwoTone.inheritAttrs = false;
export default HierarchySquareTwoTone;
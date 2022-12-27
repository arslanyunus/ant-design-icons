// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare2TwoToneSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare2TwoTone: HierarchySquare2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare2TwoToneSvg}></AntdIcon>;
};

HierarchySquare2TwoTone.displayName = 'HierarchySquare2TwoTone';
HierarchySquare2TwoTone.inheritAttrs = false;
export default HierarchySquare2TwoTone;
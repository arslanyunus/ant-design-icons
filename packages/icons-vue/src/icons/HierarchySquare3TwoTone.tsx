// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HierarchySquare3TwoToneSvg from '@ant-design/icons-svg/lib/asn/HierarchySquare3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HierarchySquare3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HierarchySquare3TwoTone: HierarchySquare3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HierarchySquare3TwoToneSvg}></AntdIcon>;
};

HierarchySquare3TwoTone.displayName = 'HierarchySquare3TwoTone';
HierarchySquare3TwoTone.inheritAttrs = false;
export default HierarchySquare3TwoTone;
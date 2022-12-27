// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomBrokenSvg from '@ant-design/icons-svg/lib/asn/BroomBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomBroken: BroomBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomBrokenSvg}></AntdIcon>;
};

BroomBroken.displayName = 'BroomBroken';
BroomBroken.inheritAttrs = false;
export default BroomBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomBoldSvg from '@ant-design/icons-svg/lib/asn/BroomBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomBold: BroomBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomBoldSvg}></AntdIcon>;
};

BroomBold.displayName = 'BroomBold';
BroomBold.inheritAttrs = false;
export default BroomBold;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomOutlineSvg from '@ant-design/icons-svg/lib/asn/BroomOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomOutline: BroomOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomOutlineSvg}></AntdIcon>;
};

BroomOutline.displayName = 'BroomOutline';
BroomOutline.inheritAttrs = false;
export default BroomOutline;
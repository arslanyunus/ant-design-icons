// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomLinearSvg from '@ant-design/icons-svg/lib/asn/BroomLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomLinear: BroomLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomLinearSvg}></AntdIcon>;
};

BroomLinear.displayName = 'BroomLinear';
BroomLinear.inheritAttrs = false;
export default BroomLinear;
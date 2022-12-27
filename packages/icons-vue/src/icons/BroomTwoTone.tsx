// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomTwoToneSvg from '@ant-design/icons-svg/lib/asn/BroomTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomTwoTone: BroomTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomTwoToneSvg}></AntdIcon>;
};

BroomTwoTone.displayName = 'BroomTwoTone';
BroomTwoTone.inheritAttrs = false;
export default BroomTwoTone;
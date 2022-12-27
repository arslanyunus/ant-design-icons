// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkTwoToneSvg from '@ant-design/icons-svg/lib/asn/MilkTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkTwoTone: MilkTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkTwoToneSvg}></AntdIcon>;
};

MilkTwoTone.displayName = 'MilkTwoTone';
MilkTwoTone.inheritAttrs = false;
export default MilkTwoTone;
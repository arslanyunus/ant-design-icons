// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkBoldSvg from '@ant-design/icons-svg/lib/asn/MilkBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkBold: MilkBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkBoldSvg}></AntdIcon>;
};

MilkBold.displayName = 'MilkBold';
MilkBold.inheritAttrs = false;
export default MilkBold;
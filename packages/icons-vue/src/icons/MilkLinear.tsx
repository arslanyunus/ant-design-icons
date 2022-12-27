// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkLinearSvg from '@ant-design/icons-svg/lib/asn/MilkLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkLinear: MilkLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkLinearSvg}></AntdIcon>;
};

MilkLinear.displayName = 'MilkLinear';
MilkLinear.inheritAttrs = false;
export default MilkLinear;
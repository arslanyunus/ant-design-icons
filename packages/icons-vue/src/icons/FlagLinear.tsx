// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagLinearSvg from '@ant-design/icons-svg/lib/asn/FlagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagLinear: FlagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagLinearSvg}></AntdIcon>;
};

FlagLinear.displayName = 'FlagLinear';
FlagLinear.inheritAttrs = false;
export default FlagLinear;
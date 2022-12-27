// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsLinearSvg from '@ant-design/icons-svg/lib/asn/FatrowsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsLinear: FatrowsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsLinearSvg}></AntdIcon>;
};

FatrowsLinear.displayName = 'FatrowsLinear';
FatrowsLinear.inheritAttrs = false;
export default FatrowsLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownLinearSvg from '@ant-design/icons-svg/lib/asn/TrendDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownLinear: TrendDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownLinearSvg}></AntdIcon>;
};

TrendDownLinear.displayName = 'TrendDownLinear';
TrendDownLinear.inheritAttrs = false;
export default TrendDownLinear;
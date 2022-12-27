// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareLinearSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareLinear: PercentageSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareLinearSvg}></AntdIcon>;
};

PercentageSquareLinear.displayName = 'PercentageSquareLinear';
PercentageSquareLinear.inheritAttrs = false;
export default PercentageSquareLinear;
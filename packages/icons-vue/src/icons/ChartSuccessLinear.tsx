// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessLinearSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessLinear: ChartSuccessLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessLinearSvg}></AntdIcon>;
};

ChartSuccessLinear.displayName = 'ChartSuccessLinear';
ChartSuccessLinear.inheritAttrs = false;
export default ChartSuccessLinear;
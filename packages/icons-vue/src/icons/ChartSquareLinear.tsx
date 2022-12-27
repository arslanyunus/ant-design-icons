// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareLinearSvg from '@ant-design/icons-svg/lib/asn/ChartSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareLinear: ChartSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareLinearSvg}></AntdIcon>;
};

ChartSquareLinear.displayName = 'ChartSquareLinear';
ChartSquareLinear.inheritAttrs = false;
export default ChartSquareLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartLinearSvg from '@ant-design/icons-svg/lib/asn/ChartLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartLinear: ChartLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartLinearSvg}></AntdIcon>;
};

ChartLinear.displayName = 'ChartLinear';
ChartLinear.inheritAttrs = false;
export default ChartLinear;
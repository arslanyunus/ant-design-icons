// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PresentionChartBrokenSvg from '@ant-design/icons-svg/lib/asn/PresentionChartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PresentionChartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PresentionChartBroken: PresentionChartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PresentionChartBrokenSvg}></AntdIcon>;
};

PresentionChartBroken.displayName = 'PresentionChartBroken';
PresentionChartBroken.inheritAttrs = false;
export default PresentionChartBroken;
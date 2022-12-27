// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PresentionChartBoldSvg from '@ant-design/icons-svg/lib/asn/PresentionChartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PresentionChartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PresentionChartBold: PresentionChartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PresentionChartBoldSvg}></AntdIcon>;
};

PresentionChartBold.displayName = 'PresentionChartBold';
PresentionChartBold.inheritAttrs = false;
export default PresentionChartBold;
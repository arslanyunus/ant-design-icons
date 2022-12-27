// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PresentionChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PresentionChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PresentionChartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PresentionChartTwoTone: PresentionChartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PresentionChartTwoToneSvg}></AntdIcon>;
};

PresentionChartTwoTone.displayName = 'PresentionChartTwoTone';
PresentionChartTwoTone.inheritAttrs = false;
export default PresentionChartTwoTone;
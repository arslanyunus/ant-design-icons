// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/ChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartTwoTone: ChartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartTwoToneSvg}></AntdIcon>;
};

ChartTwoTone.displayName = 'ChartTwoTone';
ChartTwoTone.inheritAttrs = false;
export default ChartTwoTone;
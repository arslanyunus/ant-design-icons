// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessTwoToneSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessTwoTone: ChartSuccessTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessTwoToneSvg}></AntdIcon>;
};

ChartSuccessTwoTone.displayName = 'ChartSuccessTwoTone';
ChartSuccessTwoTone.inheritAttrs = false;
export default ChartSuccessTwoTone;
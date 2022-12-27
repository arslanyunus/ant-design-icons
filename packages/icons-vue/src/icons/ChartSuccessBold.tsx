// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessBoldSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessBold: ChartSuccessBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessBoldSvg}></AntdIcon>;
};

ChartSuccessBold.displayName = 'ChartSuccessBold';
ChartSuccessBold.inheritAttrs = false;
export default ChartSuccessBold;
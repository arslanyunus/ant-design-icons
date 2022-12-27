// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessBrokenSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessBroken: ChartSuccessBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessBrokenSvg}></AntdIcon>;
};

ChartSuccessBroken.displayName = 'ChartSuccessBroken';
ChartSuccessBroken.inheritAttrs = false;
export default ChartSuccessBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartBrokenSvg from '@ant-design/icons-svg/lib/asn/ChartBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartBroken: ChartBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartBrokenSvg}></AntdIcon>;
};

ChartBroken.displayName = 'ChartBroken';
ChartBroken.inheritAttrs = false;
export default ChartBroken;
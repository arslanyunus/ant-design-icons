// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartBoldSvg from '@ant-design/icons-svg/lib/asn/ChartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartBold: ChartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartBoldSvg}></AntdIcon>;
};

ChartBold.displayName = 'ChartBold';
ChartBold.inheritAttrs = false;
export default ChartBold;
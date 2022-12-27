// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PresentionChartBulkSvg from '@ant-design/icons-svg/lib/asn/PresentionChartBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PresentionChartBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PresentionChartBulk: PresentionChartBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PresentionChartBulkSvg}></AntdIcon>;
};

PresentionChartBulk.displayName = 'PresentionChartBulk';
PresentionChartBulk.inheritAttrs = false;
export default PresentionChartBulk;
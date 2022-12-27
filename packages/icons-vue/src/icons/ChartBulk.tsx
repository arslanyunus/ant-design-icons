// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartBulkSvg from '@ant-design/icons-svg/lib/asn/ChartBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartBulk: ChartBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartBulkSvg}></AntdIcon>;
};

ChartBulk.displayName = 'ChartBulk';
ChartBulk.inheritAttrs = false;
export default ChartBulk;
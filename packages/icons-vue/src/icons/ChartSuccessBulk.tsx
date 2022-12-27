// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessBulkSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessBulk: ChartSuccessBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessBulkSvg}></AntdIcon>;
};

ChartSuccessBulk.displayName = 'ChartSuccessBulk';
ChartSuccessBulk.inheritAttrs = false;
export default ChartSuccessBulk;
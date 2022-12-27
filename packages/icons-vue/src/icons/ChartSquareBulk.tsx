// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ChartSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareBulk: ChartSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareBulkSvg}></AntdIcon>;
};

ChartSquareBulk.displayName = 'ChartSquareBulk';
ChartSquareBulk.inheritAttrs = false;
export default ChartSquareBulk;
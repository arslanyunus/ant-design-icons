// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ChartSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareBroken: ChartSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareBrokenSvg}></AntdIcon>;
};

ChartSquareBroken.displayName = 'ChartSquareBroken';
ChartSquareBroken.inheritAttrs = false;
export default ChartSquareBroken;
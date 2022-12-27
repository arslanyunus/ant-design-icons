// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ChartSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareBold: ChartSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareBoldSvg}></AntdIcon>;
};

ChartSquareBold.displayName = 'ChartSquareBold';
ChartSquareBold.inheritAttrs = false;
export default ChartSquareBold;
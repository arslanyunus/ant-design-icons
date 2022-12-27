// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ChartSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSquareOutline: ChartSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSquareOutlineSvg}></AntdIcon>;
};

ChartSquareOutline.displayName = 'ChartSquareOutline';
ChartSquareOutline.inheritAttrs = false;
export default ChartSquareOutline;
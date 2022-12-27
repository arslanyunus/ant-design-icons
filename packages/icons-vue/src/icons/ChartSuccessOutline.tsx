// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartSuccessOutlineSvg from '@ant-design/icons-svg/lib/asn/ChartSuccessOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartSuccessOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartSuccessOutline: ChartSuccessOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartSuccessOutlineSvg}></AntdIcon>;
};

ChartSuccessOutline.displayName = 'ChartSuccessOutline';
ChartSuccessOutline.inheritAttrs = false;
export default ChartSuccessOutline;
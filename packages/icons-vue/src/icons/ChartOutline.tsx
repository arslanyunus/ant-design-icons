// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartOutlineSvg from '@ant-design/icons-svg/lib/asn/ChartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartOutline: ChartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartOutlineSvg}></AntdIcon>;
};

ChartOutline.displayName = 'ChartOutline';
ChartOutline.inheritAttrs = false;
export default ChartOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartFailOutlineSvg from '@ant-design/icons-svg/lib/asn/ChartFailOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartFailOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartFailOutline: ChartFailOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartFailOutlineSvg}></AntdIcon>;
};

ChartFailOutline.displayName = 'ChartFailOutline';
ChartFailOutline.inheritAttrs = false;
export default ChartFailOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PresentionChartOutlineSvg from '@ant-design/icons-svg/lib/asn/PresentionChartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PresentionChartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PresentionChartOutline: PresentionChartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PresentionChartOutlineSvg}></AntdIcon>;
};

PresentionChartOutline.displayName = 'PresentionChartOutline';
PresentionChartOutline.inheritAttrs = false;
export default PresentionChartOutline;
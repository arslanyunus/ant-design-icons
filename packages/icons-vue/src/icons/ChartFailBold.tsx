// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartFailBoldSvg from '@ant-design/icons-svg/lib/asn/ChartFailBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartFailBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartFailBold: ChartFailBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartFailBoldSvg}></AntdIcon>;
};

ChartFailBold.displayName = 'ChartFailBold';
ChartFailBold.inheritAttrs = false;
export default ChartFailBold;
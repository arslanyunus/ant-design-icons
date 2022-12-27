// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChartFailBrokenSvg from '@ant-design/icons-svg/lib/asn/ChartFailBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChartFailBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChartFailBroken: ChartFailBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChartFailBrokenSvg}></AntdIcon>;
};

ChartFailBroken.displayName = 'ChartFailBroken';
ChartFailBroken.inheritAttrs = false;
export default ChartFailBroken;
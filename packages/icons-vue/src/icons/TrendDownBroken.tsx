// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownBrokenSvg from '@ant-design/icons-svg/lib/asn/TrendDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownBroken: TrendDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownBrokenSvg}></AntdIcon>;
};

TrendDownBroken.displayName = 'TrendDownBroken';
TrendDownBroken.inheritAttrs = false;
export default TrendDownBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpBrokenSvg from '@ant-design/icons-svg/lib/asn/TrendUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpBroken: TrendUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpBrokenSvg}></AntdIcon>;
};

TrendUpBroken.displayName = 'TrendUpBroken';
TrendUpBroken.inheritAttrs = false;
export default TrendUpBroken;
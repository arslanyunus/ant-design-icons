// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpBoldSvg from '@ant-design/icons-svg/lib/asn/TrendUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpBold: TrendUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpBoldSvg}></AntdIcon>;
};

TrendUpBold.displayName = 'TrendUpBold';
TrendUpBold.inheritAttrs = false;
export default TrendUpBold;
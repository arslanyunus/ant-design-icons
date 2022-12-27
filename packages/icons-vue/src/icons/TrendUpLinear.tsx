// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpLinearSvg from '@ant-design/icons-svg/lib/asn/TrendUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpLinear: TrendUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpLinearSvg}></AntdIcon>;
};

TrendUpLinear.displayName = 'TrendUpLinear';
TrendUpLinear.inheritAttrs = false;
export default TrendUpLinear;
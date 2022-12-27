// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpOutlineSvg from '@ant-design/icons-svg/lib/asn/TrendUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpOutline: TrendUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpOutlineSvg}></AntdIcon>;
};

TrendUpOutline.displayName = 'TrendUpOutline';
TrendUpOutline.inheritAttrs = false;
export default TrendUpOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrendUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpTwoTone: TrendUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpTwoToneSvg}></AntdIcon>;
};

TrendUpTwoTone.displayName = 'TrendUpTwoTone';
TrendUpTwoTone.inheritAttrs = false;
export default TrendUpTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrendDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownTwoTone: TrendDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownTwoToneSvg}></AntdIcon>;
};

TrendDownTwoTone.displayName = 'TrendDownTwoTone';
TrendDownTwoTone.inheritAttrs = false;
export default TrendDownTwoTone;
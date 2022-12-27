// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownBoldSvg from '@ant-design/icons-svg/lib/asn/TrendDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownBold: TrendDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownBoldSvg}></AntdIcon>;
};

TrendDownBold.displayName = 'TrendDownBold';
TrendDownBold.inheritAttrs = false;
export default TrendDownBold;
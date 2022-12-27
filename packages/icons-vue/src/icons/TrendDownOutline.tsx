// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownOutlineSvg from '@ant-design/icons-svg/lib/asn/TrendDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownOutline: TrendDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownOutlineSvg}></AntdIcon>;
};

TrendDownOutline.displayName = 'TrendDownOutline';
TrendDownOutline.inheritAttrs = false;
export default TrendDownOutline;
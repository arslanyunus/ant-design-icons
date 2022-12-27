// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeBoldSvg from '@ant-design/icons-svg/lib/asn/TradeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeBold: TradeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeBoldSvg}></AntdIcon>;
};

TradeBold.displayName = 'TradeBold';
TradeBold.inheritAttrs = false;
export default TradeBold;
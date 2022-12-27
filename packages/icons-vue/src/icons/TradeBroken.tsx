// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeBrokenSvg from '@ant-design/icons-svg/lib/asn/TradeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeBroken: TradeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeBrokenSvg}></AntdIcon>;
};

TradeBroken.displayName = 'TradeBroken';
TradeBroken.inheritAttrs = false;
export default TradeBroken;
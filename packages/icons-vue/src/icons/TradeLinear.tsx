// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeLinearSvg from '@ant-design/icons-svg/lib/asn/TradeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeLinear: TradeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeLinearSvg}></AntdIcon>;
};

TradeLinear.displayName = 'TradeLinear';
TradeLinear.inheritAttrs = false;
export default TradeLinear;
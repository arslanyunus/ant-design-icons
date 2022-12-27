// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeOutlineSvg from '@ant-design/icons-svg/lib/asn/TradeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeOutline: TradeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeOutlineSvg}></AntdIcon>;
};

TradeOutline.displayName = 'TradeOutline';
TradeOutline.inheritAttrs = false;
export default TradeOutline;
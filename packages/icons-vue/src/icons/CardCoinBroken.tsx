// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinBrokenSvg from '@ant-design/icons-svg/lib/asn/CardCoinBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinBroken: CardCoinBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinBrokenSvg}></AntdIcon>;
};

CardCoinBroken.displayName = 'CardCoinBroken';
CardCoinBroken.inheritAttrs = false;
export default CardCoinBroken;
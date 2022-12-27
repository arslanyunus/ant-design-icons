// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinBoldSvg from '@ant-design/icons-svg/lib/asn/CardCoinBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinBold: CardCoinBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinBoldSvg}></AntdIcon>;
};

CardCoinBold.displayName = 'CardCoinBold';
CardCoinBold.inheritAttrs = false;
export default CardCoinBold;
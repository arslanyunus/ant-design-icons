// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinLinearSvg from '@ant-design/icons-svg/lib/asn/CardCoinLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinLinear: CardCoinLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinLinearSvg}></AntdIcon>;
};

CardCoinLinear.displayName = 'CardCoinLinear';
CardCoinLinear.inheritAttrs = false;
export default CardCoinLinear;
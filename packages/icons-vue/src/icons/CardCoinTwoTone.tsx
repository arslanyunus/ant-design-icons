// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardCoinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinTwoTone: CardCoinTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinTwoToneSvg}></AntdIcon>;
};

CardCoinTwoTone.displayName = 'CardCoinTwoTone';
CardCoinTwoTone.inheritAttrs = false;
export default CardCoinTwoTone;
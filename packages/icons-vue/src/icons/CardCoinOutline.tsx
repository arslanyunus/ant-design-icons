// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardCoinOutlineSvg from '@ant-design/icons-svg/lib/asn/CardCoinOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardCoinOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardCoinOutline: CardCoinOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardCoinOutlineSvg}></AntdIcon>;
};

CardCoinOutline.displayName = 'CardCoinOutline';
CardCoinOutline.inheritAttrs = false;
export default CardCoinOutline;
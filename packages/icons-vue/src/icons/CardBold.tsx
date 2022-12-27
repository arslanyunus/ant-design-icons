// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardBoldSvg from '@ant-design/icons-svg/lib/asn/CardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardBold: CardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardBoldSvg}></AntdIcon>;
};

CardBold.displayName = 'CardBold';
CardBold.inheritAttrs = false;
export default CardBold;
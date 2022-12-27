// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddBoldSvg from '@ant-design/icons-svg/lib/asn/CardAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddBold: CardAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddBoldSvg}></AntdIcon>;
};

CardAddBold.displayName = 'CardAddBold';
CardAddBold.inheritAttrs = false;
export default CardAddBold;
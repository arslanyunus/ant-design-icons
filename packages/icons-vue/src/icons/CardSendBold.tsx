// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSendBoldSvg from '@ant-design/icons-svg/lib/asn/CardSendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSendBold: CardSendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSendBoldSvg}></AntdIcon>;
};

CardSendBold.displayName = 'CardSendBold';
CardSendBold.inheritAttrs = false;
export default CardSendBold;
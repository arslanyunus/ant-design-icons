// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSendOutlineSvg from '@ant-design/icons-svg/lib/asn/CardSendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSendOutline: CardSendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSendOutlineSvg}></AntdIcon>;
};

CardSendOutline.displayName = 'CardSendOutline';
CardSendOutline.inheritAttrs = false;
export default CardSendOutline;
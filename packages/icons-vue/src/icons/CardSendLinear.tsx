// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSendLinearSvg from '@ant-design/icons-svg/lib/asn/CardSendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSendLinear: CardSendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSendLinearSvg}></AntdIcon>;
};

CardSendLinear.displayName = 'CardSendLinear';
CardSendLinear.inheritAttrs = false;
export default CardSendLinear;
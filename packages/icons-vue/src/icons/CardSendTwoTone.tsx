// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSendTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardSendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSendTwoTone: CardSendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSendTwoToneSvg}></AntdIcon>;
};

CardSendTwoTone.displayName = 'CardSendTwoTone';
CardSendTwoTone.inheritAttrs = false;
export default CardSendTwoTone;
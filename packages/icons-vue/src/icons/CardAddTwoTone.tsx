// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddTwoTone: CardAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddTwoToneSvg}></AntdIcon>;
};

CardAddTwoTone.displayName = 'CardAddTwoTone';
CardAddTwoTone.inheritAttrs = false;
export default CardAddTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveBoldSvg from '@ant-design/icons-svg/lib/asn/CardReceiveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveBold: CardReceiveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveBoldSvg}></AntdIcon>;
};

CardReceiveBold.displayName = 'CardReceiveBold';
CardReceiveBold.inheritAttrs = false;
export default CardReceiveBold;
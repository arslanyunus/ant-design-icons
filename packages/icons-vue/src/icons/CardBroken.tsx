// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardBrokenSvg from '@ant-design/icons-svg/lib/asn/CardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardBroken: CardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardBrokenSvg}></AntdIcon>;
};

CardBroken.displayName = 'CardBroken';
CardBroken.inheritAttrs = false;
export default CardBroken;
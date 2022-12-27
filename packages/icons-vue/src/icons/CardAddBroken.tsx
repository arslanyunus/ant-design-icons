// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddBrokenSvg from '@ant-design/icons-svg/lib/asn/CardAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddBroken: CardAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddBrokenSvg}></AntdIcon>;
};

CardAddBroken.displayName = 'CardAddBroken';
CardAddBroken.inheritAttrs = false;
export default CardAddBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddLinearSvg from '@ant-design/icons-svg/lib/asn/CardAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddLinear: CardAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddLinearSvg}></AntdIcon>;
};

CardAddLinear.displayName = 'CardAddLinear';
CardAddLinear.inheritAttrs = false;
export default CardAddLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardLinearSvg from '@ant-design/icons-svg/lib/asn/CardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardLinear: CardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardLinearSvg}></AntdIcon>;
};

CardLinear.displayName = 'CardLinear';
CardLinear.inheritAttrs = false;
export default CardLinear;
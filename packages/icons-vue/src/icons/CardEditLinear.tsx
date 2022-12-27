// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditLinearSvg from '@ant-design/icons-svg/lib/asn/CardEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditLinear: CardEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditLinearSvg}></AntdIcon>;
};

CardEditLinear.displayName = 'CardEditLinear';
CardEditLinear.inheritAttrs = false;
export default CardEditLinear;
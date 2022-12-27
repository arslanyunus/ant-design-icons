// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveLinearSvg from '@ant-design/icons-svg/lib/asn/CardReceiveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveLinear: CardReceiveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveLinearSvg}></AntdIcon>;
};

CardReceiveLinear.displayName = 'CardReceiveLinear';
CardReceiveLinear.inheritAttrs = false;
export default CardReceiveLinear;
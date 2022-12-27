// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveBrokenSvg from '@ant-design/icons-svg/lib/asn/CardReceiveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveBroken: CardReceiveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveBrokenSvg}></AntdIcon>;
};

CardReceiveBroken.displayName = 'CardReceiveBroken';
CardReceiveBroken.inheritAttrs = false;
export default CardReceiveBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardPosBrokenSvg from '@ant-design/icons-svg/lib/asn/CardPosBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardPosBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardPosBroken: CardPosBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardPosBrokenSvg}></AntdIcon>;
};

CardPosBroken.displayName = 'CardPosBroken';
CardPosBroken.inheritAttrs = false;
export default CardPosBroken;
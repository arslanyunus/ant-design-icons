// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsBrokenSvg from '@ant-design/icons-svg/lib/asn/CardsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsBroken: CardsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsBrokenSvg}></AntdIcon>;
};

CardsBroken.displayName = 'CardsBroken';
CardsBroken.inheritAttrs = false;
export default CardsBroken;
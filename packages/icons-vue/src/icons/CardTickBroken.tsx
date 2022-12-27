// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickBrokenSvg from '@ant-design/icons-svg/lib/asn/CardTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickBroken: CardTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickBrokenSvg}></AntdIcon>;
};

CardTickBroken.displayName = 'CardTickBroken';
CardTickBroken.inheritAttrs = false;
export default CardTickBroken;
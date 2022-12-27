// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTick1BoldSvg from '@ant-design/icons-svg/lib/asn/CardTick1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTick1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTick1Bold: CardTick1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTick1BoldSvg}></AntdIcon>;
};

CardTick1Bold.displayName = 'CardTick1Bold';
CardTick1Bold.inheritAttrs = false;
export default CardTick1Bold;
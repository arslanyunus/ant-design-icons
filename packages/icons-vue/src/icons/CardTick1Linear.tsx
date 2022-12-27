// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTick1LinearSvg from '@ant-design/icons-svg/lib/asn/CardTick1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTick1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTick1Linear: CardTick1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTick1LinearSvg}></AntdIcon>;
};

CardTick1Linear.displayName = 'CardTick1Linear';
CardTick1Linear.inheritAttrs = false;
export default CardTick1Linear;
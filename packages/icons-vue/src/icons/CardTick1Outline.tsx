// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTick1OutlineSvg from '@ant-design/icons-svg/lib/asn/CardTick1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTick1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTick1Outline: CardTick1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTick1OutlineSvg}></AntdIcon>;
};

CardTick1Outline.displayName = 'CardTick1Outline';
CardTick1Outline.inheritAttrs = false;
export default CardTick1Outline;
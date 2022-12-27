// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1OutlineSvg from '@ant-design/icons-svg/lib/asn/CardRemove1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1Outline: CardRemove1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1OutlineSvg}></AntdIcon>;
};

CardRemove1Outline.displayName = 'CardRemove1Outline';
CardRemove1Outline.inheritAttrs = false;
export default CardRemove1Outline;
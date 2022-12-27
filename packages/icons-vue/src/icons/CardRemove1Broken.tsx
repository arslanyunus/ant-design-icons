// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1BrokenSvg from '@ant-design/icons-svg/lib/asn/CardRemove1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1Broken: CardRemove1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1BrokenSvg}></AntdIcon>;
};

CardRemove1Broken.displayName = 'CardRemove1Broken';
CardRemove1Broken.inheritAttrs = false;
export default CardRemove1Broken;
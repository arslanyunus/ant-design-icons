// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1LinearSvg from '@ant-design/icons-svg/lib/asn/CardRemove1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1Linear: CardRemove1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1LinearSvg}></AntdIcon>;
};

CardRemove1Linear.displayName = 'CardRemove1Linear';
CardRemove1Linear.inheritAttrs = false;
export default CardRemove1Linear;
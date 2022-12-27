// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemove1BoldSvg from '@ant-design/icons-svg/lib/asn/CardRemove1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemove1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemove1Bold: CardRemove1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemove1BoldSvg}></AntdIcon>;
};

CardRemove1Bold.displayName = 'CardRemove1Bold';
CardRemove1Bold.inheritAttrs = false;
export default CardRemove1Bold;
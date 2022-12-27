// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickTwoTone: CardTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickTwoToneSvg}></AntdIcon>;
};

CardTickTwoTone.displayName = 'CardTickTwoTone';
CardTickTwoTone.inheritAttrs = false;
export default CardTickTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/CardSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashTwoTone: CardSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashTwoToneSvg}></AntdIcon>;
};

CardSlashTwoTone.displayName = 'CardSlashTwoTone';
CardSlashTwoTone.inheritAttrs = false;
export default CardSlashTwoTone;
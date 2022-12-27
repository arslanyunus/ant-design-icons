// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsTwoTone: Forward10SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsTwoToneSvg}></AntdIcon>;
};

Forward10SecondsTwoTone.displayName = 'Forward10SecondsTwoTone';
Forward10SecondsTwoTone.inheritAttrs = false;
export default Forward10SecondsTwoTone;
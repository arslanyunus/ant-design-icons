// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward15SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Forward15SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward15SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward15SecondsTwoTone: Forward15SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward15SecondsTwoToneSvg}></AntdIcon>;
};

Forward15SecondsTwoTone.displayName = 'Forward15SecondsTwoTone';
Forward15SecondsTwoTone.inheritAttrs = false;
export default Forward15SecondsTwoTone;
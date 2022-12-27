// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsTwoTone: Forward5SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsTwoToneSvg}></AntdIcon>;
};

Forward5SecondsTwoTone.displayName = 'Forward5SecondsTwoTone';
Forward5SecondsTwoTone.inheritAttrs = false;
export default Forward5SecondsTwoTone;
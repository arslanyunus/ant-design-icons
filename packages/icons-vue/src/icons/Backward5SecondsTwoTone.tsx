// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsTwoTone: Backward5SecondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsTwoToneSvg}></AntdIcon>;
};

Backward5SecondsTwoTone.displayName = 'Backward5SecondsTwoTone';
Backward5SecondsTwoTone.inheritAttrs = false;
export default Backward5SecondsTwoTone;
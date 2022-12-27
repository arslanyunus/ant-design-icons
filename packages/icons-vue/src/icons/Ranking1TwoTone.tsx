// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Ranking1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1TwoTone: Ranking1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1TwoToneSvg}></AntdIcon>;
};

Ranking1TwoTone.displayName = 'Ranking1TwoTone';
Ranking1TwoTone.inheritAttrs = false;
export default Ranking1TwoTone;
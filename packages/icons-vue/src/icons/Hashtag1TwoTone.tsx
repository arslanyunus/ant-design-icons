// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Hashtag1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1TwoTone: Hashtag1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1TwoToneSvg}></AntdIcon>;
};

Hashtag1TwoTone.displayName = 'Hashtag1TwoTone';
Hashtag1TwoTone.inheritAttrs = false;
export default Hashtag1TwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/SimcardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardTwoTone: SimcardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardTwoToneSvg}></AntdIcon>;
};

SimcardTwoTone.displayName = 'SimcardTwoTone';
SimcardTwoTone.inheritAttrs = false;
export default SimcardTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnTwoToneSvg from '@ant-design/icons-svg/lib/asn/LampOnTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnTwoTone: LampOnTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnTwoToneSvg}></AntdIcon>;
};

LampOnTwoTone.displayName = 'LampOnTwoTone';
LampOnTwoTone.inheritAttrs = false;
export default LampOnTwoTone;
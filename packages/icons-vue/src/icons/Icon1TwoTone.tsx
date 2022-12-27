// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Icon1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Icon1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Icon1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Icon1TwoTone: Icon1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Icon1TwoToneSvg}></AntdIcon>;
};

Icon1TwoTone.displayName = 'Icon1TwoTone';
Icon1TwoTone.inheritAttrs = false;
export default Icon1TwoTone;
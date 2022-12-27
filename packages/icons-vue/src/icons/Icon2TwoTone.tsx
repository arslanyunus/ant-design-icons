// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Icon2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Icon2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Icon2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Icon2TwoTone: Icon2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Icon2TwoToneSvg}></AntdIcon>;
};

Icon2TwoTone.displayName = 'Icon2TwoTone';
Icon2TwoTone.inheritAttrs = false;
export default Icon2TwoTone;
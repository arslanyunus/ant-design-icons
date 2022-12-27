// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Icon3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Icon3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Icon3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Icon3TwoTone: Icon3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Icon3TwoToneSvg}></AntdIcon>;
};

Icon3TwoTone.displayName = 'Icon3TwoTone';
Icon3TwoTone.inheritAttrs = false;
export default Icon3TwoTone;
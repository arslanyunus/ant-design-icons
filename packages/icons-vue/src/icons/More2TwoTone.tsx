// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2TwoToneSvg from '@ant-design/icons-svg/lib/asn/More2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2TwoTone: More2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2TwoToneSvg}></AntdIcon>;
};

More2TwoTone.displayName = 'More2TwoTone';
More2TwoTone.inheritAttrs = false;
export default More2TwoTone;
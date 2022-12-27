// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Star1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1TwoTone: Star1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1TwoToneSvg}></AntdIcon>;
};

Star1TwoTone.displayName = 'Star1TwoTone';
Star1TwoTone.inheritAttrs = false;
export default Star1TwoTone;
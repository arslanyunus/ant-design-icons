// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Arrow2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2TwoTone: Arrow2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2TwoToneSvg}></AntdIcon>;
};

Arrow2TwoTone.displayName = 'Arrow2TwoTone';
Arrow2TwoTone.inheritAttrs = false;
export default Arrow2TwoTone;
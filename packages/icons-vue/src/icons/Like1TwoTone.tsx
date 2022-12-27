// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Like1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1TwoTone: Like1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1TwoToneSvg}></AntdIcon>;
};

Like1TwoTone.displayName = 'Like1TwoTone';
Like1TwoTone.inheritAttrs = false;
export default Like1TwoTone;
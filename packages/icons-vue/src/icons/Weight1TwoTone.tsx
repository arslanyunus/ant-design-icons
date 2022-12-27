// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Weight1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1TwoTone: Weight1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1TwoToneSvg}></AntdIcon>;
};

Weight1TwoTone.displayName = 'Weight1TwoTone';
Weight1TwoTone.inheritAttrs = false;
export default Weight1TwoTone;
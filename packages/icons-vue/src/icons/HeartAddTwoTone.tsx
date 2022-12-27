// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddTwoTone: HeartAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddTwoToneSvg}></AntdIcon>;
};

HeartAddTwoTone.displayName = 'HeartAddTwoTone';
HeartAddTwoTone.inheritAttrs = false;
export default HeartAddTwoTone;
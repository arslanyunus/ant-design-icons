// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Frame4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4TwoTone: Frame4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4TwoToneSvg}></AntdIcon>;
};

Frame4TwoTone.displayName = 'Frame4TwoTone';
Frame4TwoTone.inheritAttrs = false;
export default Frame4TwoTone;
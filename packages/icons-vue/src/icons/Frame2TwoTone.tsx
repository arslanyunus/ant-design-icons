// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Frame2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2TwoTone: Frame2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2TwoToneSvg}></AntdIcon>;
};

Frame2TwoTone.displayName = 'Frame2TwoTone';
Frame2TwoTone.inheritAttrs = false;
export default Frame2TwoTone;
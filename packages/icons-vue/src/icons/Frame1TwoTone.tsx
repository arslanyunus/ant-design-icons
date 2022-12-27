// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Frame1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1TwoTone: Frame1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1TwoToneSvg}></AntdIcon>;
};

Frame1TwoTone.displayName = 'Frame1TwoTone';
Frame1TwoTone.inheritAttrs = false;
export default Frame1TwoTone;
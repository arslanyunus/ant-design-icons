// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Mouse1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1TwoTone: Mouse1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1TwoToneSvg}></AntdIcon>;
};

Mouse1TwoTone.displayName = 'Mouse1TwoTone';
Mouse1TwoTone.inheritAttrs = false;
export default Mouse1TwoTone;
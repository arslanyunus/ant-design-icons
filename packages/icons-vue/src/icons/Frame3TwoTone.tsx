// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Frame3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3TwoTone: Frame3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3TwoToneSvg}></AntdIcon>;
};

Frame3TwoTone.displayName = 'Frame3TwoTone';
Frame3TwoTone.inheritAttrs = false;
export default Frame3TwoTone;
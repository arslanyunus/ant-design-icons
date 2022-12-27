// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Frame5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame5TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame5TwoTone: Frame5TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame5TwoToneSvg}></AntdIcon>;
};

Frame5TwoTone.displayName = 'Frame5TwoTone';
Frame5TwoTone.inheritAttrs = false;
export default Frame5TwoTone;
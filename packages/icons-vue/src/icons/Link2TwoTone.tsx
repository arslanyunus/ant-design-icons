// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Link2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2TwoTone: Link2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2TwoToneSvg}></AntdIcon>;
};

Link2TwoTone.displayName = 'Link2TwoTone';
Link2TwoTone.inheritAttrs = false;
export default Link2TwoTone;
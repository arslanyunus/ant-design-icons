// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Link1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1TwoTone: Link1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1TwoToneSvg}></AntdIcon>;
};

Link1TwoTone.displayName = 'Link1TwoTone';
Link1TwoTone.inheritAttrs = false;
export default Link1TwoTone;
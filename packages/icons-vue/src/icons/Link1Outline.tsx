// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1OutlineSvg from '@ant-design/icons-svg/lib/asn/Link1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1Outline: Link1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1OutlineSvg}></AntdIcon>;
};

Link1Outline.displayName = 'Link1Outline';
Link1Outline.inheritAttrs = false;
export default Link1Outline;
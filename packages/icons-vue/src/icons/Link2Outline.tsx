// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2OutlineSvg from '@ant-design/icons-svg/lib/asn/Link2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2Outline: Link2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2OutlineSvg}></AntdIcon>;
};

Link2Outline.displayName = 'Link2Outline';
Link2Outline.inheritAttrs = false;
export default Link2Outline;
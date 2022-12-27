// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link21OutlineSvg from '@ant-design/icons-svg/lib/asn/Link21Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link21OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link21Outline: Link21OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link21OutlineSvg}></AntdIcon>;
};

Link21Outline.displayName = 'Link21Outline';
Link21Outline.inheritAttrs = false;
export default Link21Outline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link21LinearSvg from '@ant-design/icons-svg/lib/asn/Link21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link21Linear: Link21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link21LinearSvg}></AntdIcon>;
};

Link21Linear.displayName = 'Link21Linear';
Link21Linear.inheritAttrs = false;
export default Link21Linear;
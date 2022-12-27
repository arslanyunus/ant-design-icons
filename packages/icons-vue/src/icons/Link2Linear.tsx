// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2LinearSvg from '@ant-design/icons-svg/lib/asn/Link2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2Linear: Link2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2LinearSvg}></AntdIcon>;
};

Link2Linear.displayName = 'Link2Linear';
Link2Linear.inheritAttrs = false;
export default Link2Linear;
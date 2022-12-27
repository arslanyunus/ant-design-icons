// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1LinearSvg from '@ant-design/icons-svg/lib/asn/Link1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1Linear: Link1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1LinearSvg}></AntdIcon>;
};

Link1Linear.displayName = 'Link1Linear';
Link1Linear.inheritAttrs = false;
export default Link1Linear;